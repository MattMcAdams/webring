const fs = require("fs");

module.exports = function (eleventyConfig) {
  /* ==================================================================
  Enable static passthrough
  ================================================================== */
  eleventyConfig.addPassthroughCopy({ "src/_static/": "/" });
  /* ==================================================================
  Override Browsersync defaults (used only with --serve)
  ================================================================== */
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, browserSync) {
        const content_404 = fs.readFileSync("dist/404.html");

        browserSync.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
          res.write(content_404);
          res.end();
        });
      },
    },
    ui: false,
    ghostMode: false,
  });
  /* ==================================================================
  RETURN
  ================================================================== */
  return {
    // Control which files Eleventy will process
    // e.g.: *.md, *.njk, *.html, *.liquid
    templateFormats: ["md", "njk", "html", "liquid"],

    // Pre-process *.md files with:
    markdownTemplateEngine: "njk",

    // Pre-process *.html files with:
    htmlTemplateEngine: "njk",

    // Opt-out of pre-processing global data JSON files:
    dataTemplateEngine: false,

    // Set directories
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "dist",
    },
  };
};;
