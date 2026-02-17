import type LanguageRepository from "~/domain/language/repositories/LanguageRepository";
import type { Language } from "~/domain/language/types";
import { isLanguage } from "~/domain/language/utils";

export default class LocalStorageLanguageRepository implements LanguageRepository {
    async get(key: string, defaultValue: Language): Promise<Language> {
        const result = localStorage.getItem(key) ?? defaultValue;

        if (isLanguage(result)) return result;
        return defaultValue;
    }

    async set(key: string, value: Language): Promise<void> {
        localStorage.setItem(key, value);
    }
}