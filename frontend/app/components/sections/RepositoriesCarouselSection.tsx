import type { SectionProps } from "~/domain/section/types";
import Section from "../layout/Section";
import Heading from "../ui/Heading";
import EmblaCarousel from "../ui/EmblaCarousel";
import { useState, type JSX, useEffect } from "react";
import useReposRepository from "~/application/github/repos/useReposRepository";
import Card from "../ui/Card";
import Autoplay from "embla-carousel-autoplay";

export default function RepositoriesCarouselSection({ ...props }: SectionProps) {
    const repo = useReposRepository();
    const [data, setData] = useState<JSX.Element[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const items = await repo.getAll();
            const newData = items.map(item => <Card repoData={item} key={item.id} />);
            setData(newData);

        };
        fetchData();
    }, []);


    return (
        <Section {...props} variant="wide">
            <Heading id="repositories-section">Repositories</Heading>
            <EmblaCarousel
                options={{ loop: true, align: 'start' }}
                plugins={[Autoplay({ delay: 5000 })]}
                slideClassName="min-[500px]:flex-[0_0_calc(100%/2)] min-[700px]:flex-[0_0_calc(100%/3)] min-[1000px]:flex-[0_0_calc(100%/4)] min-[700px]:pl-[1.6rem] min-[1000px]:pl-8"
            >
                {data}
            </EmblaCarousel>
        </Section>

    );
}