type Props = {
    children?: React.ReactNode;
}

export default function Paragraph({ children }: Props) {
    return (
        <p className="paragraph">{children}</p>
    );
}