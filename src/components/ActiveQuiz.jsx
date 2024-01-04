// import '../Styles/Components.css';
// import React from "react";
// import { Box, Button, TableRow, TableCell, Typography, TableBody, TextField } from '@mui/material';
// import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { useSelector } from "react-redux/es/hooks/useSelector";
// import { useDispatch } from "react-redux";
// import { setQuestionAnswerArr } from "./redux/quizQuestions";
// import { useNavigate } from "react-router-dom";


// export default function ActiveQuiz(props) {

//   const dispatch = useDispatch();

//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const optionsArray = ['A', 'B', 'C', 'D'];

//   const questionAnswerArr = useSelector((state) => state.questionAnswerArr);

//   const { quizName } = useSelector((state) => state.quizName);
//   const { quizColor } = useSelector((state) => state.quizColor);
//   const { quizTags } = useSelector((state) => state.quizTags);
//   const { imageUrl } = useSelector((state) => state.imageUrl);

//   const navigate = useNavigate();



//   const switchBack = () => {
//     navigate(-1);
//   };


//   return (
//     <Box sx={{ mt: 5, display: 'flex', flexDirection: 'column' }}>

//       <Box name='quizImage&Name'
//         style={{
//           display: 'flex',
//           alignItems: 'center',
//           marginBottom: 5
//         }}>

//         <Box name='quizName'
//           style={{
//             backgroundColor: quizColor,
//             borderRadius: 50,
//             width: 65,
//             height: 65,
//             marginRight: 5
//           }}
//         />

//         <h1 className='darkBlue-text'>
//           {quizName}
//         </h1>
//       </Box> {/* quizImage&Name closes */}

//       <Box name='tags'>
//         {quizTags.map((tag, index) => (
//           <span
//             key={index}
//             style={{
//               border: '1px solid #67c27c',
//               padding: '1px',
//               paddingLeft: '7px',
//               paddingRight: '7px',
//               borderRadius: '15px',
//               color: '#67c27c',
//               background: 'rgba(103, 194, 124, .09)',
//               marginRight: 5, // Add marginRight to create spacing between tags
//             }}
//           >
//             {tag}
//           </span>
//         ))}
//       </Box>

//       <Box name='switch' sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
//         <Button
//           className='button-darkMediumBlue'
//           sx={{
//             fontSize: '1rem',
//             fontStyle: 'normal',
//             fontWeight: 500,
//             lineHeight: '100%',
//             letterSpacing: '-0.05rem',
//             padding: ' 0.75rem 1.5rem',
//             mb: 2
//           }}
//           onClick={switchBack}
//         >
//           Switch to Draft
//         </Button>
//       </Box>
//       <TableBody>
//         {/* we map quizInfo onto this template. The quiz as a whole is represented by 'q' */}
//         {questionAnswerArr.questions.map((q, i) => (
//           <TableRow key={i}
//             sx={{
//               '&:hover': {
//                 backgroundColor: '#f8fafe',
//                 // border: '2px solid #3ea7f2 !important'
//               }
//             }}
//           >
//             <TableCell
//               sx={{
//                 fontWeight: 'bold',
//                 borderBottom: "none",
//                 verticalAlign: 'top'
//               }}
//             >
//               {/* we use the index (i) to add number each question when it is displayed */}
//               {i + 1}
//             </TableCell>

//             <TableCell
//               sx={{ width: 750, borderBottom: "none", verticalAlign: 'top' }}
//             >

//               {/* here we display the question */}
//               <Typography
//                 style={{
//                   fontWeight: 'bold',
//                 }}
//               >
//                 {q.question}
//               </Typography>

//               {/* Then we map array of answers onto this template */}
//               <Box name='answers' style={{ display: 'flex', flexWrap: 'wrap', gap: 2, marginTop: 5 }}>
//                 {q.type !== "TypeIn" ? (
//                   <>

//                     <Box>
//                       {q.answers.map((answer, index) => (
//                         <Typography
//                           key={index}
//                           style={{
//                             marginTop: !isMobile ? 10 : 5,
//                             border: '1.558px solid #488BFD',
//                             paddingLeft: 7,
//                             paddingRight: 7,
//                             marginRight: 5,
//                             borderRadius: '12px',
//                             color: '#488BFD',
//                             background: 'F6FFF6'
//                           }}
//                         >
//                           {optionsArray[index]}.{answer}
//                         </Typography>
//                       ))}
//                     </Box>

//                   </>
//                 ) : (

//                   <TextField
//                     id="answer"
//                     placeholder="Enter your answer here"
//                     name="answer"
//                     size='small'
//                     sx={{
//                       width: 550,
//                       margin: 0,
//                     }}
//                     InputProps={{ sx: { borderRadius: 2 } }}
//                   />
//                 )}
//               </Box>

//             </TableCell>

//           </TableRow>
//         ))
//         }
//       </TableBody >
//     </Box>
//   );
// }



import '../Styles/Components.css';
import React, { useState, useEffect } from "react";
import {
  Button, Box, IconButton, TableContainer, Table, TableHead,
  TableRow, TableCell, Paper, Typography, TableBody, TextField
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import QuestionsAndAnswers from './QuestionsAndAnswers';
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { setQuestionAnswerArr } from "./redux/quizQuestions";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function ActiveQuiz() {
  const dispatch = useDispatch();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [options, setOptions] = useState(0);

  const { quizId } = useParams();

  const questionAnswerArr = useSelector((state) => state.questionAnswerArr);
  const quizzesArray = useSelector((state) => state.quizzesArray);
  const quizInfo = quizzesArray.find(quiz => quiz.id === quizId);

  const navigate = useNavigate();


  const optionsArray = ['A', 'B', 'C', 'D'];


  // to handle edit function, update handleEditQuestion in QuestionsAndAnswers.jsx
  // also handle the favorite and delete buttons in QuestionsAndAnswers in QuestionAndAnswers.jsx, possibly passing in a function from here.


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


      <Box sx={{ mt: 5, display: 'flex', flexDirection: 'column' }}>

        <Box name='quizImage&Name'
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: 5
          }}>

        </Box> {/* quizImage&Name closes */}


        <Box name='switch' sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
          <Button
            className='button-darkMediumBlue'
            sx={{
              fontSize: '1rem',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: '100%',
              letterSpacing: '-0.05rem',
              padding: ' 0.75rem 1.5rem',
              mb: 2
            }}
            // onClick={switchBack}
          >
            Switch to Draft
          </Button>
        </Box>
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
                sx={{
                  fontWeight: 'bold',
                  borderBottom: "none",
                  verticalAlign: 'top'
                }}
              >
                {/* we use the index (i) to add number each question when it is displayed */}
                {i + 1}
              </TableCell>

              <TableCell
                sx={{ width: 750, borderBottom: "none", verticalAlign: 'top' }}
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
                  {q.type !== "TypeIn" ? (
                    <>

                      <Box>
                        {q.answers.map((answer, index) => (
                          <Typography
                            key={index}
                            style={{
                              marginTop: !isMobile ? 10 : 5,
                              border: '1.558px solid #488BFD',
                              paddingLeft: 7,
                              paddingRight: 7,
                              marginRight: 5,
                              borderRadius: '12px',
                              color: '#488BFD',
                              background: 'F6FFF6'
                            }}
                          >
                            {optionsArray[index]}.{answer}
                          </Typography>
                        ))}
                      </Box>

                    </>
                  ) : (

                    <TextField
                      id="answer"
                      placeholder="Enter your answer here"
                      name="answer"
                      size='small'
                      sx={{
                        width: 550,
                        margin: 0,
                      }}
                      InputProps={{ sx: { borderRadius: 2 } }}
                    />
                  )}
                </Box>

              </TableCell>

            </TableRow>
          ))
          }
        </TableBody >
      </Box>













    </Box>
  );
}