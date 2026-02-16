import HttpReposRepository from "~/infrastructure/api/github/repos/HttpReposRepository";

export default function useReposRepository() {
    return new HttpReposRepository();
}