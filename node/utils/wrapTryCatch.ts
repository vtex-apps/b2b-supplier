export default async function wrapTryCatch<T>(promise: Promise<T>) {
  try {
    const response = await promise

    return {
      response,
      error: null,
    }
  } catch (error) {
    return {
      response: null,
      error,
    }
  }
}
