import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Box, Button, Paper, Tabs, Tab, Typography } from '@mui/material';
import QuizDetails from "./QuizDetails";
import QuizQuestions from "./QuizQuestions";
import QuizSchedule from "./QuizSchedule";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import PublishModal from "./PublishModal";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { addQuiz } from "./redux/quizzes";
import {
  resetOptions, resetQuestion, resetAnswersArr, resetQuestionToEdit, resetSingleCorrect, resetMultipleCorrect,
  resetWarn, resetSelectedFile, resetAnswerType, resetIsFavorite, resetQuestionAnswerArr,
} from "./redux/quizQuestions";
import { resetQuizName, resetQuizColor, resetQuizTags, resetNewTag, resetImageUrl, resetQuizID } from "./redux/quizDetails";
import { resetQuizCategory } from "./redux/Categories";
import { db } from "../firebase";
import { collection, addDoc, doc, updateDoc, onSnapshot, deleteDoc, getDoc, query, orderBy } from "firebase/firestore";
import { getAuth } from "firebase/auth";



function CustomTabPanel(props) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function CreateNewQuiz() {
  const colletionRef = collection(db, 'categories');

  const dispatch = useDispatch();

  const [value, setValue] = useState(0);
  const [showIcons, setShowIcons] = useState(true);

  const [publishModalState, setPublishModalState] = useState(false);

  const questionAnswerArr = useSelector((state) => state.questionAnswerArr);
  const { quizName } = useSelector((state) => state.quizName);
  const { quizTags } = useSelector((state) => state.quizTags);
  const { quizColor } = useSelector((state) => state.quizColor);
  const { imageUrl } = useSelector((state) => state.imageUrl);
  const { quizID } = useSelector((state) => state.quizID);

  const { quizCategory } = useSelector((state) => state.quizCategory);
  const quizzesArray = useSelector((state) => state.quizzesArray);
  const currentUser = useSelector((state) => state.loggedInUserEmail.user);

  const auth = getAuth();
  const user = auth.currentUser;

  const handleCancelButtonClick = () => {
    toggle();
  };

  const toggle = () => {
    setPublishModalState(!publishModalState);
  };

  const handleAddNewQuiz = async (newQuiz) => {
    dispatch(addQuiz(newQuiz));
    await addDoc(collection(db, "quizzes"), newQuiz);
  };

  const handlePublishButtonClick = () => {
    setPublishModalState(!publishModalState);
  };


  const handleConfirmPublishButtonClick = async() => {
    if (quizID) {
      console.log(`we are editing a quiz here, not creating a new quiz.`);
      await handleEditingQuiz(quizID)
    } else {
      await handleAddNewQuiz(newQuiz);
    }

    navigate(`/quizzes/${quizCategory}`);
    reset();
  };
  // currently trying to render the new quiz in the quizzes page before it is available (in state or db). must handle with conditional or asynchronous loading or something.


  const handleEditingQuiz = async (IDofQuizToEdit) => {
    try {
      const quizRef = doc(db, "quizzes", IDofQuizToEdit);
      const docSnap = await getDoc(quizRef);
  
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        await updateDoc(quizRef, newQuiz);
        console.log("Document successfully updated");
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error updating the quiz: ", error);
    }
  };



  const reset = () => {
    dispatch(resetOptions());
    dispatch(resetQuestion());
    dispatch(resetAnswersArr());
    dispatch(resetQuestionToEdit());
    dispatch(resetSingleCorrect());
    dispatch(resetMultipleCorrect());
    dispatch(resetWarn());
    dispatch(resetSelectedFile());
    dispatch(resetAnswerType());
    dispatch(resetIsFavorite());
    dispatch(resetQuestionAnswerArr());
    dispatch(resetQuizName());
    dispatch(resetQuizColor());
    dispatch(resetQuizTags());
    dispatch(resetNewTag());
    dispatch(resetImageUrl());
    dispatch(resetQuizCategory());
    dispatch(resetQuizID());
  };

  const quiz = {
    title: 'Title quiz test',
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const newQuiz = {
    Creator: user.uid || `Null`, Name: quizName || `No Name`, Category: quizCategory || `No Category`, Image: imageUrl, Color: quizColor || '#cfd9fa',
    tags: quizTags, Favorite: false, questions: questionAnswerArr.questions
  };


  const tabStyles = {
    textTransform: 'none',
    fontWeight: '525',
    color: '#a2a2a2',
    fontSize: 'larger'
  };

  const navigate = useNavigate();

  const handlePreviewClick = () => {

    navigate('/preview');
    console.log('the new quiz is: ' + newQuiz);

    console.log('the quiz array is: ' + quizzesArray);
  };

  // have publish button take questionAnswerArrSlice and combine with name, color, imgageURL, 
  // tags and add an ID to create a 'quiz' then append thew newly created quiz to the array of quizzes.

  const previewPublishButtons = (
    value > 1 ?
      < Box sx={{ display: 'flex' }}>
        <Button
          className="button-darkMediumBlue"
          onClick={handlePreviewClick}
          sx={{ mr: 1 }}
        >
          Preview
        </Button>
        <Button
          className="button-darkMediumBlue"
          sx={{ mr: !isMobile ? 1 : null }}
          onClick={handlePublishButtonClick}
        >
          Publish
        </Button>
      </Box >
      : null

  );

  return (
    <Paper sx={{ marginTop: '50px', marginLeft: -3, marginRight: -3 }} >
      <Box sx={{ width: '100%' }}>

        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: 1,
          borderColor: 'divider'
        }} >
          <Tabs value={value} onChange={handleChange}
            style={{
              textAlign: 'center', fontSize: !isMobile ? '1.5rem' : null,
              fontStyle: 'normal', fontWeight: 500,
            }}>
            <Tab label="Details" sx={tabStyles} />
            <Tab label="Questions" sx={tabStyles} />
            <Tab label="Schedule" sx={tabStyles} />
          </Tabs>
          <Box>
            {isMobile ? null :
              previewPublishButtons
            }

            {/* add a check for quiz title and questions. If no title or questions display error 'must enter title' 
            or 'error must enter questions' when clicking preview/publish buttons. */}
          </Box>
        </Box>

        <CustomTabPanel value={value} index={0}>
          <QuizDetails showIcons={showIcons} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <QuizQuestions />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <QuizSchedule />
        </CustomTabPanel>

      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>

        <Box sx={{ display: 'flex' }}>
          {value > 0 ? (
            <Button
              className="button-mediumBlue"
              size="small"
              sx={{ mr: 1 }}
              onClick={(e) => handleChange(e, value - 1)}
            >
              Prev
            </Button>
          ) : null}

          {value < 2 ? ( 
          <Button
            size="small"
            className="button-mediumBlue"
            onClick={(e) => handleChange(e, value + 1)}
          >
            Next
            </Button>
          ) : null}
        </Box>

        {!isMobile ? null :
          previewPublishButtons
        }

      </Box>


      <PublishModal
        publishModalState={publishModalState}
        handleConfirmPublishButtonClick={handleConfirmPublishButtonClick}
        handleCancelButtonClick={handleCancelButtonClick}
        quizToPublish={quiz.title}
      />

    </Paper >
  );
}
