import {useEffect, useMemo, useState} from "react";


export enum EDeviceType  {
    LARGE_DESKTOP = 'LARGE_DESKTOP',
    DESKTOP = 'DESKTOP',
    TABLET = 'TABLET',
    MOBILE = 'MOBILE',
}


export const useWindowSize = (): EDeviceType | undefined => {
        const [windowSize, setWindowSize] = useState<{width: number | null, height: number | null }>({
            width: null,
            height: null,
        });

        useEffect(() => {
            if (typeof window !== 'undefined') {
                const handleResize = () => {
                    setWindowSize({
                        width: window.innerWidth,
                        height: window.innerHeight,
                    });
                }

                window.addEventListener("resize", handleResize);

                handleResize();

                return () => window.removeEventListener("resize", handleResize);
            }
        }, []);

        const { width } = windowSize;

        if (width) {
            if (width >= 1024) {
                return EDeviceType.LARGE_DESKTOP
            }
            if (width < 1024 && width >= 768) {
                return EDeviceType.DESKTOP
            }
            if (width < 768 && width >= 375) {
                return EDeviceType.TABLET
            }
            if (width < 375) {
                return EDeviceType.MOBILE
            }
        }

    }
