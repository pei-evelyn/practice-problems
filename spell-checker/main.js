const spellChecker = (userWords, correctWords) => {
  const output = {}
  const correct = []
  const incorrect = []
  for (let i = 0; i < userWords.length; i++) {
    if(userWords[i] === correctWords[i]) {
      correct.push(userWords[i])
    } else {
      incorrect.push(userWords[i])
    }
  }
  output.correct = correct
  output.incorrect = incorrect
  return output
}
