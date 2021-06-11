module.exports = (config) => {
  config.addPassthroughCopy("./js");
  config.addPassthroughCopy("./css");
  config.addPassthroughCopy("./images");
};
