import type { Theme } from "~/domain/theme/types";
import useThemeRepository from "./useThemeRepository";
import { useEffect, useState } from "react";

export default function useThemeState(key: string, defaultValue: Theme) {
    const repo = useThemeRepository();

    const [value, setValue] = useState(defaultValue);

    useEffect(() => {
        const fetchData = async () => {
            const initial = await repo.get(key, defaultValue);
            document.documentElement.classList.add(initial);
            setValue(initial);
        };

        fetchData();
    }, []);

    const set = (next: Theme) => {
        repo.set(key, next);
        document.documentElement.classList.replace(value, next);
        setValue(next);
    };

    return [value, set] as const;
}