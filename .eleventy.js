module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/index.css");

    return {
        dir: {
            input: "src",
            output: "dist"
        }
    }
}