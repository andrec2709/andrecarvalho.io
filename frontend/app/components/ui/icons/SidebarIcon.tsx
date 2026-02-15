
export const SidebarIcon = ({ open = true, className }: { open?: boolean; className?: string }) => {

    if (open) {

        return (
            <svg
                width="131.99998mm"
                height="132mm"
                viewBox="0 0 131.99998 132"
                version="1.1"
                id="svg1"
                xmlns="http://www.w3.org/2000/svg"
                className={`w-auto aspect-square ${className}`}
            >
                <defs
                    id="defs1" />
                <g
                    id="layer1"
                    transform="translate(-43.787245,-65.498109)">
                    <g
                        id="g4"
                        transform="translate(-1.9785662,2.5438714)">
                        <rect
                            style={{ fill: 'none', strokeWidth: 10, strokeDasharray: 'none' }}
                            id="rect1"
                            width="122"
                            height="122"
                            x="50.765808"
                            y="67.954239"
                            ry="39.655457"
                            rx="39.655457"
                            className="stroke-svg-icon-fill"
                        />
                        <path
                            style={{ fill: 'none', strokeWidth: 10, strokeDasharray: 'none' }}
                            d="M 133.11035,67.954238 V 189.95424"
                            id="path1"
                            className="stroke-svg-icon-fill"
                        />
                        <path
                            style={{ fill: 'none', strokeWidth: 10, strokeLinecap: 'round', strokeLinejoin: 'round', strokeDasharray: 'none', paintOrder: 'normal' }}
                            d="m 107.3993,105.93373 -23.180354,23.18034 22.061224,22.86067"
                            id="path3"
                            className="stroke-svg-icon-fill"
                        />
                    </g>
                </g>
            </svg>
        );
    } else {
        return (
            <svg
                width="131.99998mm"
                height="132mm"
                viewBox="0 0 131.99998 132"
                version="1.1"
                id="svg1"
                xmlns="http://www.w3.org/2000/svg"
                className={`w-auto aspect-square scale-x-[-1] ${className}`}
            >
                <defs
                    id="defs1" />
                <g
                    id="layer1"
                    transform="translate(-43.787245,-65.498109)">
                    <g
                        id="g4"
                        transform="translate(-1.9785662,2.5438714)">
                        <rect
                            style={{ fill: 'none', strokeWidth: 10, strokeDasharray: 'none' }}
                            id="rect1"
                            width="122"
                            height="122"
                            x="50.765808"
                            y="67.954239"
                            ry="39.655457"
                            rx="39.655457"
                            className="stroke-svg-icon-fill"
                        />
                        <path
                            style={{ fill: 'none', strokeWidth: 10, strokeDasharray: 'none' }}
                            d="M 133.11035,67.954238 V 189.95424"
                            id="path1"
                            className="stroke-svg-icon-fill"
                        />
                        <path
                            style={{ fill: 'none', strokeWidth: 10, strokeLinecap: 'round', strokeLinejoin: 'round', strokeDasharray: 'none', paintOrder: 'normal' }}
                            d="m 107.3993,105.93373 -23.180354,23.18034 22.061224,22.86067"
                            id="path3"
                            className="stroke-svg-icon-fill"
                        />
                    </g>
                </g>
            </svg>
        );
    }
};

export default SidebarIcon;