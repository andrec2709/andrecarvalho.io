declare global {
    interface Window {
        grecaptcha: {
            enterprise: {
                ready: (cb: () => void) => void;

                execute: (
                    siteKey: string,
                    options: { action: string },
                ) => Promise<string>;

                render: (
                    container: string | HTMLElement, 
                    parameters: object,
                    inherit?: boolean
                ) => number;

                reset: (widgetID?: number) => void;

                getResponse: (widgetID?: number) => string;
            };
        };
    }
}

export {};