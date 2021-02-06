enum HTTP_METHODS {
  GET = "get",
  POST = "post",
  PATCH = "patch",
  DELETE = "delete",
}
type HttpClientModel = (method: HTTP_METHODS, url: string, body?: any) => Promise<any>;
export { HTTP_METHODS, HttpClientModel };
