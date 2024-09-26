function NextButton({ dispatch, answer, numQuestions, index }) {
  if (answer === null) return null;
  return (
    <button
      className="btn btn-ui"
      onClick={() =>
        dispatch({
          type: index + 1 >= numQuestions ? 'finish' : 'nextQuestion',
        })
      }
    >
      Next
    </button>
  );
}

export default NextButton;
