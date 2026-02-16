import type { RepoCard } from "../types";

export default interface ReposRepository {
    getAll(): Promise<RepoCard[]>;
}