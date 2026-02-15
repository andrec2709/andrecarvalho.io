import { useEffect, useRef, useState, type JSX } from "react";
import Card from "./Card";
import type { CardMeasure, RepoCard } from "../../domain/github/repos/types";
import DropdownIcon from "./icons/DropdownIcon";
import { v4 as uuidv4 } from "uuid";
import Heading from "./Heading";
import { useLang } from "~/contexts/LangContext";


const getReposInfo = async (): Promise<RepoCard[]> => {
    const API = import.meta.env.VITE_API_URL;
    const response = await fetch(`${API}/GetReposInfo.php`);
    const json: RepoCard[] = await response.json();
    json.sort((a, b) => b.commits - a.commits);

    return json;
};

export const Carousel = () => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const lastTouch = useRef(0);
    const moveThreshold = useRef(10);
    const [cards, setCards] = useState<JSX.Element[] | null>(null);

    const { translations } = useLang();

    useEffect(() => {
        const fetchData = async () => {
            const repos = await getReposInfo();

            let newCards = repos.map((repo, index) => {
                const id = `id-${uuidv4()}`;
                return <Card key={id} id={id} repoData={repo} />;
            });

            let key = `id-${uuidv4()}`;

            let first = newCards[0];
            first = <Card key={key} id={key} repoData={first.props.repoData} />;

            key = `id-${uuidv4()}`;

            let last = newCards[newCards.length - 1];
            last = <Card key={key} id={key} repoData={last.props.repoData} />;

            newCards.splice(0, 0, last);
            newCards.push(first);

            setCards(newCards);
        };

        fetchData();
    }, []);

    const cardsMeasureRef = useRef<CardMeasure[]>([]);

    const transform = (newActiveIndex: number) => {
        const wrapper = wrapperRef.current;
        const measures = cardsMeasureRef.current;
        if (!measures || !wrapper) return;

        const newMeasures = measures.map(obj => {
            if (obj.index === newActiveIndex) {
                return {
                    ...obj,
                    active: true,
                };
            }
            return {
                ...obj,
                active: false,
            };
        });

        cardsMeasureRef.current = newMeasures;
        const active = newMeasures[newActiveIndex];

        wrapper.style.transform = `translateX(${active.centerWith}px)`;
    };

    const noTransitionTransform = (snapToEnd: boolean) => {
        const wrapper = wrapperRef.current;
        const measures = cardsMeasureRef.current;
        if (!wrapper || !measures) return;

        wrapper.classList.replace('transition-transform', 'transition-none');

        if (snapToEnd) {
            transform(measures.length - 1);
        } else {
            transform(0)
        }

    };

    const handleClick = (isLeft: boolean) => {
        const measures = cardsMeasureRef.current;
        const wrapper = wrapperRef.current;

        if (!measures || !wrapper) return;

        let activeIndex = 1;
        measures.forEach(obj => {
            if (obj.active) activeIndex = obj.index;
        });

        let newActiveIndex;
        if (isLeft) {
            if (activeIndex - 1 < 1) {
                newActiveIndex = measures.length - 2;
                noTransitionTransform(true);
            }
            else newActiveIndex = activeIndex - 1;
        } else {
            if (activeIndex + 1 > measures.length - 2) {
                newActiveIndex = 1;
                noTransitionTransform(false);
            }
            else newActiveIndex = activeIndex + 1;
        }

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                wrapper.classList.replace('transition-none', 'transition-transform');
                transform(newActiveIndex);
            });
        });

    };

    const initMeasures = (e?: UIEvent) => {
        let isResize = false;
        if (e) isResize = true;

        const wrapper = wrapperRef.current;
        const carousel = carouselRef.current;
        if (!wrapper || !carousel || !cards) return;

        const spacing = parseInt(getComputedStyle(wrapper).columnGap.replace('px', ''));
        const carouselRect = carousel.getBoundingClientRect();
        const carouselWidth = carouselRect.width;
        const measures: CardMeasure[] = [];

        let activeIndex = cards.length - 1 >= 2 ? 2 : 1;
        if (isResize) {
            cardsMeasureRef.current.forEach(obj => {
                if (obj.active) activeIndex = obj.index;
            });
        }

        cards.forEach((card, index) => {
            if (!card) return;
            const id = card.props.id;

            const element = document.getElementById(id);
            if (!element) return;

            const rect = element.getBoundingClientRect();

            const width = rect.width;
            const offsetLeft = element.offsetLeft;
            const offsetCenter = - offsetLeft + carouselWidth / 2 - width / 2;

            measures.push({
                id: id,
                index: index,
                width: width,
                parentSpacing: spacing,
                offsetLeft: offsetLeft,
                centerWith: offsetCenter,
                carouselWidth: carouselWidth,
                active: index === activeIndex ? true : false,
            });
        });

        cardsMeasureRef.current = measures;
        const active = measures[activeIndex];
        wrapper.style.transform = `translateX(${active.centerWith}px)`;

    };

    const handlePointerDown = (e: PointerEvent) => {
        const target = e.target as HTMLDivElement;
        target.setPointerCapture(e.pointerId);
        lastTouch.current = e.clientX;
    };

    const handlePointerUp = (e: PointerEvent) => {
        const clientX = e.clientX;

        const last = lastTouch.current;
        const highThreshold = last + moveThreshold.current;
        const lowThreshold = last - moveThreshold.current;

        if (clientX >= lowThreshold && clientX <= highThreshold) return;

        if (clientX > lastTouch.current) {
            handleClick(true);
        } else {
            handleClick(false);
        }
    };

    useEffect(() => {
        initMeasures();

        window.addEventListener('resize', initMeasures);

        const carousel = carouselRef.current;
        if (!carousel) return;

        carousel.addEventListener('pointerdown', handlePointerDown);
        carousel.addEventListener('pointerup', handlePointerUp);

        return () => {
            window.removeEventListener('resize', initMeasures);
            carousel.removeEventListener('pointerdown', handlePointerDown);
            carousel.removeEventListener('pointerup', handlePointerUp);
        };
    }, [cards]);

    return (
        <div className="carousel-container flex flex-col relative items-center justify-center" role="complementary">
            <Heading id="projects">
                {translations?.words.projects}
            </Heading>
            <div
                className="carousel flex items-center text-white touch-pan-y h-[400px] w-full overflow-hidden"
                ref={carouselRef}
            >
                <div
                    className="cards-wrapper flex gap-x-10 relative h-full items-center transition-transform duration-200 ease"
                    ref={wrapperRef}
                >
                    {cards}
                </div>
            </div>
            <div className="flex gap-x-1 items-center justify-end w-full">
                <button
                    className="w-10 flex items-center justify-center cursor-pointer hover:scale-120 transition-transform duration-100 ease"
                    onClick={() => handleClick(true)}
                ><DropdownIcon className="-rotate-90" /></button>
                <button
                    className="w-10 flex items-center justify-center cursor-pointer hover:scale-120 transition-transform duration-100 ease"
                    onClick={() => handleClick(false)}
                ><DropdownIcon className="rotate-90" /></button>
            </div>
        </div>
    );
};


export default Carousel;