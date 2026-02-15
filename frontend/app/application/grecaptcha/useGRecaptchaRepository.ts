import HttpGRecaptchaRepository from "~/infrastructure/api/grecaptcha/HttpGRecaptchaRepository";

export default function useGRecaptchaRepository() {
    return new HttpGRecaptchaRepository();
}