import { GitHubQueryCreatorModel } from './types';
/**
 * @param {string} language
 * @param {string} sortBy
 * @param {string} createdDate
 * @param {string} order
 * @param {string} perPage
 * @param {string} page
 */

const defaultParams = {
  language: 'js',
  sortBy: 'stars',
  createdDate: '2019-01-10',
  order: 'desc',
  perPage: '10',
  page: '1',
};

const GitHubQueryCreator: GitHubQueryCreatorModel = ({
  language,
  sortBy,
  createdDate,
  order,
  perPage,
  page,
}) => {
  const baseURl = `${process.env.GITHUB_API_PROTOCOL}://${process.env.GITHUB_API_URL}`;

  const query = `created:>${
    createdDate || defaultParams.createdDate
  }+language:${language || defaultParams.language}&sort=${
    sortBy || defaultParams.sortBy
  }&order=${order || defaultParams.order}&per_page=${
    perPage || defaultParams.perPage
  }&page=${page || defaultParams.page}`;

  return `
  ${baseURl}/search/repositories?q=${query}`;
};

export default GitHubQueryCreator;
