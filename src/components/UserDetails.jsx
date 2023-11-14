<Box sx={{ mt: 3 }}>
<FormControl size='small'>
  <InputLabel id="select-answer-type"
    sx={{
      color: "#a2a2a2"
    }}
  >
    Answer Type
  </InputLabel>
  <div >
    <Select

      labelId='select-answer-type'
      id='select-answer-type'
      value={answerType}
      onChange={handleAnswerTypeChange}
      label='answerType'
      sx={{
        minWidth: 200,
        mr: 2,
        borderRadius: 2
      }}
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      <MenuItem value={'Multiple'}>Multiple Choice</MenuItem>
      <MenuItem value={'Single'}>Single Choice</MenuItem>
      <MenuItem value={'TypeIn'}>Type in Answer</MenuItem>
    </Select>

    {(answerType === 'Single' || answerType === 'Multiple') && (
      // show or hide 'Add another option' button
      <>
        <Box id='answersList'>
          {generateOptionFields()}
        </Box>
        <Box sx={{ mt: 1 }}>
          {warn ?
            <Typography sx={{ color: 'red' }}>
              You cannot add more than 4 possible answers
            </Typography>
            : null
          }
          {addOptionButton}
        </Box>
      </>
    )}

    <Button sx={{
      display: 'block',
      mt: 2
    }}
      className="button-mediumBlue"
      onClick={handleAddClick}
    >
      Add Question
    </Button>

  </div>
</FormControl>
</Box>