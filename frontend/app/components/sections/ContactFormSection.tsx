import { Form } from "react-router";
import Section from "../layout/Section";
import InputText from "../ui/InputText";
import Label from "../ui/Label";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import { useEffect, useRef, useState } from "react";
import { useToolTip } from "~/contexts/ToolTipContext";
import { useValidity } from "~/application/other/useValidity";
import { useLang } from "~/contexts/LangContext";
import useGRecaptchaRepository from "~/application/grecaptcha/useGRecaptchaRepository";


type Props = {
    classNameContainer?: string;
    classNameContent?: string;
};

export const ContactFormSection = ({ classNameContainer, classNameContent }: Props) => {

    // Contexts
    const { showMessage } = useToolTip();
    const { translations } = useLang();


    // Hooks
    const formRef = useRef<HTMLFormElement>(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const recaptchaRepo = useGRecaptchaRepository();

    // provides ValidityState of name and email fields
    const [nameValidity, setNameValidity] = useValidity();
    const [emailValidity, setEmailValidity] = useValidity();

    // Add recaptcha enterprise script to <head>
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://www.google.com/recaptcha/enterprise.js?render=6Lc9CuwrAAAAAJtuJ7rmpSjblUlXleYIXBjK6euL";
        script.async = true;
        document.head.appendChild(script);
    }, []);

    /**
     * This function handles submit of the contact form
     * @param e mouse event
     */
    async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        window.grecaptcha.enterprise.ready(async () => {
            if (!nameValidity?.valid) {
                showMessage('name is invalid', 'fail');
                return;
            } else if (!emailValidity?.valid) {
                showMessage('email is invalid', 'fail');
                return;
            } else if (!formRef.current) {
                return;
            }
            
            const token = await window.grecaptcha.enterprise
                .execute('6Lc9CuwrAAAAAJtuJ7rmpSjblUlXleYIXBjK6euL', { action: 'submit' });

            const formData = new FormData(formRef.current);

            const response = await recaptchaRepo.getAssessment(formData, token);

            if (response.success) {
                showMessage('e-mail sent', 'ok');
                setName('');
                setEmail('');
                setMessage('');
                setEmailValidity(null);
                setNameValidity(null);
            } else {
                showMessage('something went wrong, please try again', 'fail');
            }
        });

    }

    return (
        <Section classNameContainer={classNameContainer} classNameContent={classNameContent}>
            <Heading id="work-together">
                {translations?.contact.heading_1}
            </Heading>
            <p>{translations?.contact.paragraph_1}{" "}
                <a
                    className="body-link"
                    href="mailto:contato@andrecarvalho.io"
                    target="_blank"
                    rel="noopener noreferrer"
                >contato@andrecarvalho.io</a>{"."}
            </p>
            <br />
            <p>{translations?.contact.paragraph_1_2}</p>

            <Heading as="h2" id="contact-me">
                {translations?.contact.heading_3}
            </Heading>

            <Form
                id="contact-me-form"
                method="POST"
                ref={formRef}
                className="flex flex-col mt-5"
                onSubmit={e => e.preventDefault()}
            >
                <Label className="form-field">
                    <span className="block">{translations?.contact.name}</span>
                    <InputText
                        placeholder={translations?.contact.name}
                        required
                        name="username"
                        id="username-input"
                        className={`w-full ${nameValidity?.valid != null
                            ? (nameValidity?.valid
                                ? 'border-input-valid focus:border-input-valid'
                                : 'border-input-invalid focus:border-input-invalid'
                            )
                            : ''
                            }`}
                        value={name}
                        onChange={e => {
                            const { validity, value } = e.target;
                            setName(value);
                            setNameValidity(validity);
                        }}
                    />
                </Label>
                <Label className="form-field" >
                    <span className="block">E-mail</span>
                    <InputText
                        placeholder="E-mail"
                        type="email"
                        required
                        name="email"
                        id="email-input"
                        className={`w-full ${emailValidity?.valid != null
                            ? (emailValidity?.valid
                                ? 'border-input-valid focus:border-input-valid'
                                : 'border-input-invalid focus:border-input-invalid'
                            )
                            : ''
                            }`}
                        value={email}
                        onChange={e => {
                            const { validity, value } = e.target;

                            setEmail(value);
                            setEmailValidity(validity);
                        }}
                    />
                </Label>
                <Label className="form-field">
                    <span>{translations?.contact.message}</span>
                    <textarea
                        name="message"
                        id="message-input"
                        className="block resize-y w-full bg-input-background rounded-sm text-input-on-background 
                        border border-input-border/30 focus:border-input-border outline-0 px-2 py-1 min-h-80"
                        spellCheck={false}
                        placeholder={translations?.contact.message}
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                    >
                    </textarea>
                </Label>
                <Button
                    className="g-recaptcha mt-5 self-end"
                    onClick={handleSubmit}
                >
                    submit
                </Button>
            </Form>
        </Section>
    );
};

export default ContactFormSection;