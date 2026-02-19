import LocalStorageThemeRepository from "~/infrastructure/local-storage/theme/LocalStorageThemeRepository";

export default function useThemeRepository() {
    return new LocalStorageThemeRepository();
}