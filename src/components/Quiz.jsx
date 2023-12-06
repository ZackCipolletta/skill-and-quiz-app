
import '../Styles/Components.css';
import React, { useState, useEffect } from "react";
import {
  Button, Box, IconButton, TableContainer, Table, TableHead,
  TableRow, TableCell, Paper, Typography
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { LuAward } from 'react-icons/lu';
import { PiTagChevron } from 'react-icons/pi';
import QuestionsAndAnswers from './QuestionsAndAnswers';
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { setQuestionAnswerArr } from "./redux/quizQuestions";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Quiz() {
  const dispatch = useDispatch();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [options, setOptions] = useState(0);

  const { quizId } = useParams();
  const numericQuizId = parseInt(quizId, 10);
  // const [quizInfo, setQuizInfo] = useState({



  const questionAnswerArr = useSelector((state) => state.questionAnswerArr);

  const quizzesArray = useSelector((state) => state.quizzesArray);

  const quizInfo = quizzesArray.find(quiz => quiz.id === quizId);



  const navigate = useNavigate();

  // useEffect(() => {

  //   dispatch(setQuestionAnswerArr({
  //     questions: quizInfo.questions,
  //   }));

  // }, [quizInfo]);


  const buttons = (
    <>
      < IconButton className='button-lightGray'
        style={{
          marginTop: '.2rem',
          marginRight: '1rem',
          display: 'flex',
          width: '2.6rem',
          height: '2.083rem',
          borderRadius: '0.5rem',
          background: '#F1F6FC)',
          transform: "rotate(90deg) scaleY(1.2)"

        }
        }>
        <PiTagChevron />
      </IconButton >

      <IconButton className='button-lightGreen'
        style={{
          marginRight: '1rem',
          display: 'flex',
          width: '2.5rem',
          height: '2.5rem',
          borderRadius: '0.5rem',
          background: '#F1F6FC)'
        }}>
        <LuAward />
      </IconButton>

      <Button
        className='button-redButton'
        sx={{ mr: '1rem', padding: 0 }}>
        Delete
      </Button>
      <Button
        className='button-mediumBlue'
        sx={{ padding: 0 }}
      >
        Cancel
      </Button>

    </>
  );


  return (
    <Box
      style={{ marginTop: 35, paddingBottom: 5 }}>

      <Box name='name&Buttons'
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 5
        }}>
        <Box name='quizImage&Name'
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: 5
          }}>

          <Box name='quizName'
            style={{

              backgroundImage: quizInfo.Image ? `url('${quizInfo.Image}')` : null,
              backgroundColor: !quizInfo.Image ? quizInfo.Color : null,


              borderRadius: 50,
              width: 65,
              height: 65,
              marginRight: 5
            }}
          />

          <h1 className='darkBlue-text'>
            {quizInfo.Name}
          </h1>
        </Box> {/* quizImage&Name closes */}

        <Box name='buttons' sx={{ display: 'flex' }}>

          {!isMobile ? buttons : null}

        </Box>{/* buttons closes */}

      </Box> {/* name&Buttons closes */}

      <Box name='tags'>
        {quizInfo.tags.map((tag, index) => (
          <span
            key={index}
            style={{
              border: '1px solid #67c27c',
              padding: '1px',
              paddingLeft: '7px',
              paddingRight: '7px',
              borderRadius: '15px',
              color: '#67c27c',
              background: 'rgba(103, 194, 124, .09)',
              marginRight: 5, // Add marginRight to create spacing between tags
            }}
          >
            {tag}
          </span>
        ))}
      </Box>

      <Box name='mobileButtons' sx={{ display: 'flex', mt: 3 }}> {isMobile ? buttons : null} </Box>

      <Box sx={{ mt: 3, mb: 5 }}>
        <TableContainer component={Paper}>
          <Table
          // size="small"
          >
            <TableHead>
              <TableRow>
                <TableCell><h1>#</h1></TableCell>
                <TableCell><h1>Questions</h1></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>

            <QuestionsAndAnswers
              quizInfo={quizInfo}
            // handleRemoveQuestion={handleRemoveQuestion}
            />

          </Table>
        </TableContainer>

      </Box>

    </Box>
  );
}
