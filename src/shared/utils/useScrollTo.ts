import { useCallback } from 'react';

export const useScrollTo = (sectionId) => {
    return useCallback(() => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({behavior: 'smooth', block: 'center'}
            );
        }
    }, [sectionId]);
};
