const fetch = require('node-fetch');

exports.request = async (method, url, body = null) => {
  const headers = {
    'Content-Type': 'application/json',
  };
  const options = {
    method,
    body,
    headers,
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

exports.methods = {
  GET: 'get',
  POST: 'post',
  PATCH: 'patch',
  DELETE: 'delete',
};
