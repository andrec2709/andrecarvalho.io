import type ReposRepository from "~/domain/github/repos/repositories/ReposRepository";
import type { RepoCard } from "~/domain/github/repos/types";

export default class HttpReposRepository implements ReposRepository {
    async getAll(): Promise<RepoCard[]> {
        const API = import.meta.env.VITE_API_URL;
        const response = await fetch(`${API}/GetReposInfo.php`);
        const json: RepoCard[] = await response.json();

        return json;
    }
}