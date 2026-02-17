import type { Language } from "../types";

export default interface LanguageRepository {
    get(key: string, defaultValue: Language): Promise<Language>;
    set(key: string, value: Language): Promise<void>;
}