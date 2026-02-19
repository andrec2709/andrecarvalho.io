import type ThemeRepository from "~/domain/theme/repositories/ThemeRepository";
import { isTheme, type Theme } from "~/domain/theme/types";

export default class LocalStorageThemeRepository implements ThemeRepository {
    async get(key: string, defaultValue: Theme): Promise<Theme> {
        const result = localStorage.getItem(key) ?? defaultValue;

        if (isTheme(result)) return result;
        return defaultValue;
    }

    async set(key: string, value: Theme): Promise<void> {
        localStorage.setItem(key, value);
    }
}