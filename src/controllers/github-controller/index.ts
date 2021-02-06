import { Request, Response } from 'express';
import createErrorModel from './types';

import GitHubUrlCreator from './utils/urlCreator';
import ERROR_MESSAGES from '../../providers/error-provider/error-messages';
import HttpClient from '../../utils/http-client';
import { HTTP_METHODS } from '../../utils/http-client/types';

const GitHubApiController = async (req: Request, res: Response) => {
  const { language, sort, created, order, per_page, page } = req.query;
  const checkHeaders = function (headers: Headers) {
    const createError: createErrorModel = (message) => {
      throw new Error(`${message}, your account will be reset at `);
    };
  };

  try {
    const url: string = GitHubUrlCreator({
      language,
      sortBy: sort,
      createdDate: created,
      order,
      perPage: per_page,
      page,
    });
    const apiResponse = await HttpClient(HTTP_METHODS.GET, url);
    checkHeaders(apiResponse.headers);
    return res.json(apiResponse.data);
  } catch (error) {
    return res
      .status(error.code || 500)
      .json({ message: error.message || ERROR_MESSAGES.networkError });
  }
};

export default GitHubApiController;
