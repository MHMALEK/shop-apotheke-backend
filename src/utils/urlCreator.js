const acceptableOptionsToPassToApi = require("./defaultOptions");
/**
 * @param {string} language
 * @param {string} sortBy
 * @param {string} createdDate
 * @param {string} order
 */

const defaultParams = {
  language: "js",
  sortBy: "stars",
  createdDate: "2019-01-10",
  order: "desc",
};

module.exports = GitHubUrlCreator = ({
  language,
  sortBy,
  createdDate,
  order,
}) => {
  const baseURl = `${process.env.GITHUB_API_PROTOCOL}://${process.env.GITHUB_API_URL}`;

  const query = `created:>${
    createdDate || defaultParams.createdDate
  }+language:${language || defaultParams.language}&sort=${
    sortBy || defaultParams.sortBy
  }&order=${order || defaultParams.order}`;

  return `
  ${baseURl}/search/repositories?q=${query}`;
};
