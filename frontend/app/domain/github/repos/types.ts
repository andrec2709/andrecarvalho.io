export type CardMeasure = {
    id: string;
    index: number;
    width: number;
    offsetLeft: number;
    parentSpacing: number;
    centerWith: number;
    carouselWidth: number;
    active: boolean;

};

export type RepoCard = {
    id: string;
    repo_name: string;
    description: string;
    updated_at: string;
    commits_url: string;
    commits: number;
    avatar_url?: string;
};