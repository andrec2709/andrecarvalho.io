import type { JSX } from "react";

type Props = {
    children: React.ReactNode;
};

export const Main = ({ children }: Props) => {
    return (
        <main className="flex flex-col w-full">
            {children}
        </main>
    );
};

export default Main;