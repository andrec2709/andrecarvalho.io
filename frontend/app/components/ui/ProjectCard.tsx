import { useState, type AnchorHTMLAttributes, type ImgHTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, type LinkProps } from 'react-router';
import { cn } from '~/utils';

type ProjectCardProps = Omit<React.ComponentPropsWithRef<'a'>, 'className'> & {
    backgroundImgSrc: string;
    title: string;
    body: string;
    imgProps?: Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'className'>;
};

export default function ProjectCard({ backgroundImgSrc, imgProps, title, body, ...props }: ProjectCardProps) {
    const { t } = useTranslation();

    return (
        <a
            className='w-70 min-[320px]:w-80 xs:w-80 h-100 select-none rounded-2xl overflow-hidden relative shadow-xl shadow-black/40 hover:scale-105 transition-transform'
            target='_blank'
            {...props}
        >
            <img
                src={backgroundImgSrc}
                draggable={false}
                className='object-cover w-full h-full'
                {...imgProps}
            />
            <div className='w-full h-1/2 hover:h-2/3 transition-[height] bg-black/75 absolute bottom-0 rounded-2xl backdrop-blur-md border border-white/20 p-4 flex flex-col gap-y-2'>
                <p
                    className={cn('text-white text-lg min-[375px]:text-2xl border-b border-b-white/25 w-full overflow-clip font-bold')}
                >
                    {title}
                </p>
                <p className='text-white text-sm w-full overflow-y-hidden scrollbar-hidden wrap-break-word text-wrap'>{body}</p>
                <div className='flex gap-x-2 h-fit items-end justify-end mt-auto'>
                    <p
                        className="transition-transform hover:-translate-x-2 w-full hover:underline text-right text-cyan-400"
                    >
                        {t('projectCards.readMore')} &rarr;
                    </p>
                </div>
            </div>

        </a>
    );
}