export default async function fetchQuiz(url) {
  const response = await fetch(url)
  const responseJSON = await response.json()
  return responseJSON.results
}