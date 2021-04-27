module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: '@import "@/globalStyles/colors.scss";',
            },
        },
    },
};
