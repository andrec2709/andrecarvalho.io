import type { SectionProps } from "~/domain/section/types";
import Section from "../layout/Section";
import Heading from "../ui/Heading";
import EmblaCarousel from "../ui/EmblaCarousel";
import { useState, type JSX, useEffect, Suspense, lazy } from "react";
import useReposRepository from "~/application/github/repos/useReposRepository";
import Card from "../ui/Card";
import Autoplay from "embla-carousel-autoplay";
import { useTranslation } from "react-i18next";
import SyncIcon from "../ui/icons/SyncIcon";
import Loading from "../ui/Loading";
import type { RepoCard } from "~/domain/github/repos/types";

export default function RepositoriesCarouselSection({ ...props }: SectionProps) {
    const repo = useReposRepository();
    const [repos, setRepos] = useState<RepoCard[] | null>(null);
    const { t } = useTranslation();

    useEffect(() => {
        const fetchData = async () => {
            const items = await repo.getAll();
            setRepos(items);
        };
        fetchData();
    }, []);


    return (
        <Section {...props} variant="wide">
            <Heading id="repositories-section">{t('portfolio.repositories.heading')}</Heading>
            {
                repos
                    ? (
                        <EmblaCarousel
                            options={{ loop: true, align: 'start' }}
                            plugins={[Autoplay({ delay: 3000 })]}
                            slideClassName="min-[570px]:flex-[0_0_calc(100%/2)] min-[800px]:flex-[0_0_calc(100%/3)] min-[1000px]:flex-[0_0_calc(100%/4)] min-[700px]:pl-[1.6rem] min-[1000px]:pl-8"
                        >
                            {repos?.map(item => <Card repoData={item} key={item.id} />)}
                        </EmblaCarousel>
                    )
                    : (
                        <Loading />
                    )
            }
            <br />
        </Section>

    );
}