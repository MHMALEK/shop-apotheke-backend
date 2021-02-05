const httpRequestUtils = require("../utils/api");
const GitHubUrlCreator = require("../utils/urlCreator");
const defaultErrorMessages = require("../utils/error-messages");
const timeUtils = require("../utils/time");

exports.GitHubApiController = async (req, res) => {
  const { language, sortBy, createdDate, order } = req.query;
  const checkHeaders = function (headers) {
    // handle important headers
    // check if user with client ID can still request to api
    const importantHeaders = [
      "X-RateLimit-UserLimit", //Total credits that can be allocated.
      "X-RateLimit-UserRemaining", //Total credits available.
      "X-RateLimit-UserReset",
      "X-RateLimit-ClientLimit",
      "X-RateLimit-ClientRemaining",
    ];

    const totalCredits = headers.get("X-RateLimit-UserLimit");
    const remainingCreditForMyUser = headers.get("X-RateLimit-UserRemaining");
    const whenCreditsWillReset = headers.get("X-RateLimit-UserReset");
    const totalCreditForDaily = headers.get("X-RateLimit-ClientLimit");
    const remainingCreditAvailbleToday = headers.get(
      "X-RateLimit-ClientRemaining"
    );

    const convertResetTime = () => {
      const timeToReset = timeUtils.convertUnixTimeStampToDate(
        whenCreditsWillReset
      );
      return timeToReset;
    };

    const createError = (message) => {
      const resetTime = convertResetTime();
      throw new Error(`${message}, your account will be reset at ${resetTime}`);
    };

    if (totalCredits === 0) {
      createError("you dont have any total credits in account at all");
    }
    if (remainingCreditForMyUser === 0) {
      createError("you dont have any remaining credits");
    }
    if (totalCreditForDaily === 0) {
      createError("you dont have any total credits today");
    }
    if (remainingCreditAvailbleToday === 0) {
      createError("you don't have any remaing credits today");
    }
  };

  try {
    const url = GitHubUrlCreator({ language, sortBy, createdDate, order });
    const apiResponse = await httpRequestUtils.request(
      httpRequestUtils.methods.GET,
      url
    );
    checkHeaders(apiResponse.headers);
    return res.json(apiResponse.data);
  } catch (error) {
    return res
      .status(error.code || 500)
      .json({ message: error.message || defaultErrorMessages.networkError });
  }
};
