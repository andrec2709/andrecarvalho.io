import type { Theme } from "../types";

export default interface ThemeRepository {
    get(key: string, defaultValue: Theme): Promise<Theme>;
    set(key: string, value: Theme): Promise<void>;
}