import fetch from "node-fetch";
import DEFAULT_HEADERS from "./default-headers";
import { HttpClientModel } from "./types";
const HttpClient: HttpClientModel = async (method, url, body = null) => {
  const options = {
    method,
    body,
    DEFAULT_HEADERS,
  };
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    const { headers } = response;
    return { data, headers };
  } catch (error) {
    throw new Error(error);
  }
};

export default HttpClient;
