export const langs = ["pt", "en"] as const;

export type Lang = (typeof langs)[number];

export const isLang = (value: string): value is Lang => {
    return langs.includes(value as Lang);
};