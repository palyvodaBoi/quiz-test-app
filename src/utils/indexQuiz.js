export default function indexQuiz(quiz) {
  return quiz.map((question, index) => {
    return {
      ...question,
      position: index + 1
    }
  })
}