module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/index.css");
    eleventyConfig.addPassthroughCopy("src/assets/");

    return {
        dir: {
            input: "src",
            output: "dist"
        }
    }
}