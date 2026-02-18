import type { AnchorHTMLAttributes, ImgHTMLAttributes } from 'react';
import { Link, type LinkProps } from 'react-router';
import { useLang } from '~/contexts/LangContext';

type ProjectCardProps = {
    backgroundImgSrc: string;
    title: string;
    body: string;
    tryHref: string;
    readMoreHref: string;
    imgProps?: Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'className'>;
};

type ProjectCardButtonProps = Omit<LinkProps, 'className'> & {
    text: string;
};
// type ProjectCardButtonProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'> & {
//     text: string;
// };

function ProjectCardButton({ text, ...props }: ProjectCardButtonProps) {
    return (
        <Link
            {...props}
            className='text-white text-center text-sm bg-cyan-950/50 hover:bg-cyan-900/75 active:bg-cyan-600/50 transition-[background-color,translate] hover:-translate-y-1 duration-100 border border-cyan-400 rounded-md font-bold p-2 h-fit min-w-20'
        >
            {text}
        </Link>
        
    );
}

export default function ProjectCard({ tryHref, readMoreHref, backgroundImgSrc, imgProps, title, body }: ProjectCardProps) {
    const { i18n } = useLang();
    return (
        <div className='w-70 min-[320px]:w-80 xs:w-80 h-100 select-none rounded-2xl overflow-hidden relative shadow-xl shadow-black/40 hover:scale-105 transition-transform'>
            <img
                src={backgroundImgSrc}
                draggable={false}
                className='object-cover w-full h-full'
                {...imgProps}
            />
            <div className='w-full h-1/2 hover:h-2/3 transition-[height] bg-black/75 absolute bottom-0 rounded-2xl backdrop-blur-md border border-white/20 p-4 flex flex-col gap-y-2'>
                <h2 className='text-white text-2xl border-b border-b-white/25 w-full text-nowrap overflow-clip font-bold'>{title}</h2>
                <p className='text-white text-sm w-full overflow-y-hidden scrollbar-hidden wrap-break-word text-wrap'>{body}</p>
                <div className='flex gap-x-2 h-fit items-end justify-end mt-auto'>
                    <ProjectCardButton text={i18n.t('projectCards.tryIt')} to={tryHref} target='_blank' />
                    <ProjectCardButton text={i18n.t('projectCards.readMore')} to={readMoreHref} target='_blank' />
                </div>
            </div>

        </div>
    );
}