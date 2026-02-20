import type { Language } from "~/domain/language/types";
import useLanguageRepository from "./useLanguageRepository";
import { useEffect, useState } from "react";

export default function useLanguageState(key: string) {
    const repo = useLanguageRepository();

    const userPref: Language =
        (navigator.language === 'pt-BR' || navigator.language === 'pt')
            ? 'pt-BR'
            : 'en'

    const [value, setValue] = useState(() => userPref);

    useEffect(() => {
        /**
         * Initializes value to the stored language 
         */
        const fetchData = async () => {
            const language = await repo.get(key, userPref);
            setValue(language);
        };

        fetchData();
    }, []);

    const set = (next: Language) => {
        repo.set(key, next);
        setValue(next);
    };

    return [value, set] as const;
}