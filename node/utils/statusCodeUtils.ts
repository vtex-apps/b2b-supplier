export function isNotSuccessCode(statusCode: number) {
  return statusCode < 200 || statusCode > 299
}
