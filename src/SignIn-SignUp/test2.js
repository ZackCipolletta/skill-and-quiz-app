const handleRemoveClick = (index) => {
  // Create a copy of the answersArr without the item at the specified index
  const updatedAnswers = [...answersArr];
  updatedAnswers.splice(index, 1);
  setAnswersArr(updatedAnswers);

  // Reduce the options count
  setOptions(options - 1);
};

const generateOptionFields = () => {
  const optionFields = [];
  const optionsArray = ['A', 'B', 'C', 'D'];

  for (let i = 0; i < options; i++) {
    optionFields.push(
      <Box key={i} sx={{ mt: 1 }}>
        <TextField
          required
          value={answersArr[i]}
          onChange={(e) => handleAnswerChange(i, e.target.value)}
          id={`Quiz-Answer-${optionsArray[i]}`}
          placeholder={`Enter Option ${optionsArray[i]}`}
          name={`Quiz-Answer-${optionsArray[i]}`}
          className='input-field'
          height='50px'
          size='small'
          sx={{
            width: 200
          }}
          InputProps={{ sx: { borderRadius: 2 } }}
        />
        {i > 0 && (
          <IconButton sx={{ transform: "scale(0.5)" }}
            onClick={() => handleRemoveClick(i)}>
            <TfiClose />
          </IconButton>
        )}
      </Box>
    );
  }
  return optionFields;
};
