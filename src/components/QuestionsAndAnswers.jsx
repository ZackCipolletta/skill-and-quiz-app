import '../Styles/Components.css';
import React, { useEffect } from "react";
import { Box, IconButton, TableRow, TableCell, Typography, TableBody, Checkbox } from '@mui/material';
import { PiTrashThin, PiPencilLineLight, PiStar, PiStarFill } from 'react-icons/pi';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import {
  setOptions, decreaseOptions, setQuestion, setAnswersArr,
  setQuestionToEdit, setSingleCorrect, setMultipleCorrect,
  setWarn, setSelectedFile, setAnswerType, setIsFavorite, setQuestionAnswerArr, addQuestion
} from "./redux/quizQuestions";


export default function QuestionsAndAnswers(props) {

  const { questionWidth } = props;

  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const optionsArray = ['A', 'B', 'C', 'D'];


  const questionAnswerArr = useSelector((state) => state.questionAnswerArr);

  const handleRemoveQuestion = (i) => {
    // first we create a copy of the existing questions objects in questionAnswerArr array
    const updatedQuestionAnswerArr = [...questionAnswerArr.questions];
    // then we remove 1 of the objects at position 'i' of the array (removing both the question and the answers)
    updatedQuestionAnswerArr.splice(i, 1);
    // then we set questionAnswerArr equal to updatedQuestionAnswerArr which no longer contains the targeted object in the array

    dispatch(setQuestionAnswerArr({
      questions: updatedQuestionAnswerArr,
    }));

  };

  const handleFavorite = (i) => {
    const updatedQuestionAnswerArr = questionAnswerArr.questions.map((question, index) => {
      if (i === index) {
        // Create a new object with the properties of the existing question
        // and add or modify the "favorite" property.
        return {
          ...question,
          favorite: !question.favorite,
        };
      }
      return question;
    });

    // Dispatch the updated array back to the state.
    dispatch(setQuestionAnswerArr({ questions: updatedQuestionAnswerArr }));
  };

  const handleEditQuestion = (i) => {
    // we set 'question' in state equal to the selected value at position 'i' of the questionAnswerArr array.
    // setQuestion(questionAnswerArr.questions[i].question);
    dispatch(setQuestion(questionAnswerArr.questions[i].question));

    // we get the answer type from the selected question and assign that value to 'answerType' in state so the correct value is preselected for the user when they start editing the question.
    // setAnswerType(questionAnswerArr.questions[i].type);
    dispatch(setAnswerType(questionAnswerArr.questions[i].type));

    // Then we check to see if the question type is 'Single' or 'Multiple' and assign the corresponding value in state (single/multiple) the id value of the correct answer or answers. Ex: singleCorrect: 2 (the id of the correct answer). Or multipleCorrect: [1, 3] (the ids of the 2 correct answers).
    if (questionAnswerArr.questions[i].type === 'Single') {
      dispatch(setSingleCorrect(questionAnswerArr.questions[i].correct));
    } else if (questionAnswerArr.questions[i].type === 'Multiple') {
      dispatch(setMultipleCorrect(questionAnswerArr.questions[i].correct));
    }

    // we set the value of options equal to the length of the answers array at position 'i' of the questionAnswerArr array so that the text boxes are correctly assigned 'A, B, C, D' values.
    dispatch(setOptions(questionAnswerArr.questions[i].answers.length));

    // we set the answersArr array equal to the array of answers at position 'i' of the questionAnswerArr array, which then populates the answer options text fields with answers from the selected question.
    dispatch(setAnswersArr(questionAnswerArr.questions[i].answers));

    // we check to see if this was a favorite question so that value does not get lost when editing the question.
    dispatch(setIsFavorite(questionAnswerArr.questions[i].favorite));
    // sets the questionAnswerArr position that will be edited so we can edit and update the correct question while also telling handleAddClick that we are editing and not creating a new question.
    dispatch(setQuestionToEdit(i));
  };
  
  const quizInfo = props.quizInfo || questionAnswerArr;


  return (
    <TableBody>
      {/* we map quizInfo onto this template. The quiz as a whole is represented by 'q' */}
      {quizInfo.questions.map((q, i) => (
        <TableRow key={i}
          sx={{
            '&:hover': {
              backgroundColor: '#f8fafe',
              // border: '2px solid #3ea7f2 !important'
            }
          }}
        >
          <TableCell
            sx={{ borderRight: '1px solid #e0e0e0', fontWeight: 'bold', borderBottom: "none", verticalAlign: 'top' }}
          >
            {/* we use the index (i) to add number each question when it is displayed */}
            {i + 1}
          </TableCell>

          <TableCell
            sx={{ width: 750, borderRight: '1px solid #e0e0e0', borderBottom: "none", verticalAlign: 'top' }}
          >

            {/* here we display the question */}
            <Typography
              style={{
                fontWeight: 'bold',
              }}
            >
              {q.question}
            </Typography>

            {/* Then we map array of answers onto this template */}
            <Box name='answers' style={{ display: 'flex', flexWrap: 'wrap', gap: 2, marginTop: 5 }}>

              <Box>
                {
                  q && q.answers && Array.isArray(q.answers) && 
                  q.answers.map((answer, index) => (
                  <Typography
                    key={index}
                    style={{
                      marginTop: !isMobile ? 10 : 5,
                      border: q.correct === index || (Array.isArray(q.correct) && q.correct.includes(index)) ?
                        '1px solid #67C27C'
                        : '1px solid #488BFD',
                      paddingLeft: 7,
                      paddingRight: 7,
                      borderRadius: '12px',
                      color: q.correct === index || (Array.isArray(q.correct) && q.correct.includes(index)) ?
                        '#67C27C' : '#488BFD',
                      background: '#F6FFF6'
                    }}
                  >
                    {optionsArray[index]}.{answer}
                  </Typography>
                ))}
              </Box>

            </Box>
          </TableCell>

          <TableCell
            sx={{ borderRight: '1px solid #e0e0e0', borderBottom: "none" }}
          >

            <Checkbox sx={{
              // marginLeft: !isMobile ? -1 : -4,
              // marginRight: -4,
              // transform: "scale(.7)"
            }}
              icon={<PiStar color='black' />}
              checkedIcon={<PiStarFill color='gold' />}
              checked={q.favorite}

              onChange={() => handleFavorite(i)}
            />

          </TableCell>

          <TableCell
            sx={{ minWidth: 100, borderBottom: "none", paddingRight: 0 }}
          >

            <IconButton sx={{
              // marginLeft: !isMobile ? -4 : -4,
              // marginRight: -1,
              transform: "scale(.7) scaleY(1.2)"
            }}>
              <PiPencilLineLight color='black'
                onClick={() => handleEditQuestion(i)}
              />
            </IconButton>

            <IconButton sx={{
              marginRight: !isMobile ? 0 : -3,
              transform: "scale(.7) scaleY(1.2)"
            }}
              onClick={() => handleRemoveQuestion(i)}
            >

              <PiTrashThin color='red' />
            </IconButton>

          </TableCell>
        </TableRow>
      ))
      }
    </TableBody >
  );
}