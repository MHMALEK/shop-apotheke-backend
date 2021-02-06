import { Request, Response } from "express";
import createErrorModel from "./types";

import GitHubUrlCreator from "./utils/urlCreator";
import ERROR_MESSAGES from "../../providers/error-provider/error-messages";
import HttpClient from "../../utils/http-client";
import { HTTP_METHODS } from "../../utils/http-client/types";

const GitHubApiController = async (req: Request, res: Response) => {
  const { language, sortBy, createdDate, order } = req.query;
  const checkHeaders = function (headers: Headers) {
    // handle important headers
    // check if user with client ID can still request to api
    // const importantHeaders = [
    //   'X-RateLimit-UserLimit', // Total credits that can be allocated.
    //   'X-RateLimit-UserRemaining', // Total credits available.
    //   'X-RateLimit-UserReset',
    //   'X-RateLimit-ClientLimit',
    //   'X-RateLimit-ClientRemaining'
    // ]

    const totalCredits = headers.get("X-RateLimit-UserLimit");
    const remainingCreditForMyUser = headers.get("X-RateLimit-UserRemaining");
    const whenCreditsWillReset = headers.get("X-RateLimit-UserReset");
    const totalCreditForDaily = headers.get("X-RateLimit-ClientLimit");
    const remainingCreditAvailbleToday = headers.get(
      "X-RateLimit-ClientRemaining"
    );

    const createError: createErrorModel = (message) => {
      throw new Error(`${message}, your account will be reset at `);
    };

    if (totalCredits === "0") {
      createError("you dont have any total credits in account at all");
    }
    if (remainingCreditForMyUser === "0") {
      createError("you dont have any remaining credits");
    }
    if (totalCreditForDaily === "0") {
      createError("you dont have any total credits today");
    }
    if (remainingCreditAvailbleToday === "0") {
      createError("you don't have any remaing credits today");
    }
  };

  try {
    const url: string = GitHubUrlCreator({
      language,
      sortBy,
      createdDate,
      order,
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
