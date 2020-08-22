export const homeVariants = {
    hidden: {
        x: '100vw'
    },
    visible: {
        x: 0,
        transition: {
            type: 'spring',
            stifness: 120
        }
    },
    exit: {
        x: '-100vw',
        transition: {
            ease: 'easeInOut'
        }
    }
};

export const sectionVariants = {
    hidden: {
        x: '100vw'
    },
    visible: {
        x: 0,
        transition: {
            ease: 'easeInOut'
        }
    },
    exit: {
        x: '-100vw',
        transition: {
            ease: 'easeInOut'
        }
    }
};