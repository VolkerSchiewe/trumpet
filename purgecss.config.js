module.exports = {
    content: ["./src/**/*.html", "./src/**/*.tsx", "./src/**/*.ts"],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
};