import LocalStorageLanguageRepository from "~/infrastructure/local-storage/language/LocalStorageLanguageRepository";

export default function useLanguageRepository() {
    return new LocalStorageLanguageRepository();
}