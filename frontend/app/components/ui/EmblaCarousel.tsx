import { type EmblaOptionsType, type EmblaPluginType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { NextButton, PrevButton, usePrevNextButtons } from './EmblaCarouselArrowButtons';
import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import { cn } from '~/utils';

type Props = {
    options?: EmblaOptionsType;
    plugins?: EmblaPluginType[];
    children?: React.ReactNode;
    wrapperClassName?: string;
    viewportClassName?: string;
    containerClassName?: string;
    slideClassName?: string;
    slideMediaQueriesOverride?: string;
};

export default function EmblaCarousel({
    children,
    options,
    plugins,
    containerClassName,
    slideClassName,
    viewportClassName,
    wrapperClassName,
    slideMediaQueriesOverride
}: Props) {

    const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onNextButtonClick,
        onPrevButtonClick
    } = usePrevNextButtons(emblaApi);

    return (
        <div
            className={cn('m-auto flex relative items-center justify-center', wrapperClassName)}
            onPointerEnter={() => emblaApi?.plugins().autoplay?.stop()}
            onPointerLeave={() => emblaApi?.plugins().autoplay?.play()}
        >
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} className='aspect-square w-fit p-2 flex items-center justify-center cursor-pointer' />
            <div
                role='group'
                aria-roledescription='carousel'
                tabIndex={0}
                aria-label='carousel'
                className={cn('overflow-hidden', viewportClassName)}
                ref={emblaRef}
                onKeyDown={e => {
                    if (e.key === 'ArrowLeft' && emblaApi?.canScrollPrev()) emblaApi.scrollPrev();
                    if (e.key === 'ArrowRight' && emblaApi?.canScrollNext()) emblaApi.scrollNext();
                }}
            >
                <div className={cn('flex touch-pan-y touch-pinch-zoom -ml-4 min-[500px]:-ml-[1.6rem] min-[1000px]:-ml-8', containerClassName)}>
                    {React.Children.map(children, child => (
                        <div className={cn('py-2.5 min-w-0 flex-[0_0_100%] pl-4 flex justify-center overflow-visible ', slideClassName)}>
                            {child}
                        </div>
                    ))}
                </div>
            </div>
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} className='aspect-square w-fit p-2 flex items-center justify-center cursor-pointer' />
        </div>

    );
}