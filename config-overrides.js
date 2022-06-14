module.exports = function override(config, env) {
  config.module.rules.push({
    test: /\.md$/,
    loader: "frontmatter-markdown-loader",
    options: {
      mode: ["react-component"],
    },
  });
  return config;
};
