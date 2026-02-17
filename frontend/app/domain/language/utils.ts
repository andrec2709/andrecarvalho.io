import { validLanguages, type Language } from "./types";

export function isLanguage(value: string): value is Language {
    return validLanguages.includes(value as Language);
}