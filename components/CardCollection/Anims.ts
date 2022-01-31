export const parentVariants = {
    initial: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: .75,
            staggerChildren: 0.15,
            when: 'beforeChildren'
        }
    }
}
export const previewVariants = {
    initial: {
        opacity: 0,
        y: -50,
    },
    visible: {
        opacity: 1,
        y: 0,
        // transition: {
        //     staggerChildren: 100
        // }
    }
};

export const normalVariants = {
    initial: {
        opacity: 0,
        y: 15,
        scale: 0.95
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        // transition: {
        //     staggerChildren: 50
        // }
    }
}