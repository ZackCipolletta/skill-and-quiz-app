const generateOptionFields = () => {
  const optionsArray = ['A', 'B', 'C', 'D'];

  return optionFields.map((_, i) => (
    <Box key={i} sx={{ mt: 1 }}>
      <TextField
        required
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
        <IconButton sx={{ transform: "scale(0.5)" }} onClick={handleRemoveClick}>
          <TfiClose />
        </IconButton>
      )}
    </Box>
  ));
};
