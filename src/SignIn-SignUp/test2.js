const [answers, setAnswers] = useState(0);

const generateAnswersField = () => {
  const optionFields = [];

  const answersOptionsArray = ['A', 'B', 'C', 'D'];


  for (let i = 0; i < answers; i++) {

    optionFields.push(
      <Box key={i} sx={{ mt: 1 }}>
        <TextField
          required
          id={`Quiz-Answer-${answersOptionsArray[i]}`}
          placeholder={`Enter Option ${answersOptionsArray[i]}`}
          name={`Quiz-Answer-${answersOptionsArray[i]}`}
          className='input-field'
          height='50px'
          size='small'
          sx={{
            width: 200
          }}
          InputProps={{ sx: { borderRadius: 2 } }}
        />
      </Box>
    );
  }
  return optionFields;
};




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