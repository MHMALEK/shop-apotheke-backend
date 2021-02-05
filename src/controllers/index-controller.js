exports.IndexController = async (req, res) => {
  res.render("index", {
    title: "GitHub API",
  });
};
