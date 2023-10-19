
function YourComponent() {
  const [questionAnswerArr, setQuestionAnswerArr] = useState({
    questions: [],
  });

  const addQuestion = () => {
    setQuestionAnswerArr((prevState) => ({
      ...prevState,
      questions: [
        ...prevState.questions,
        {
          question: '',
          answers: [],
        },
      ],
    }));
  };