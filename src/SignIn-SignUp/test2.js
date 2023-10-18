<Box sx={{ mt: 5 }}>
  <FormControl size='small'>
    <InputLabel id="select-answer-type"
      sx={{
        color: "#a2a2a2"
      }}
    >
      Answer Type
    </InputLabel>
    <div>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
        <Select
          labelId='select-answer-type'
          id='select-answer-type'
          value={answerType}
          onChange={handleChange}
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
          <MenuItem value={'Single Choice'}>Single Choice</MenuItem>
          <MenuItem value={'Multiple Choice'}>Multiple Choice</MenuItem>
          <MenuItem value={'Type in Answer'}>Type in Answer</MenuItem>
        </Select>
        <Button className="button-mediumBlue">Add Question</Button>
      </Box>

      {(answerType === 'Single Choice' || answerType === 'Multiple Choice') && (
        <>
          <Box id='answersList'>
            {generateOptionFields()}
          </Box>
          <Box>
            {addOptionButton}
          </Box>
        </>
      )}
    </div>
  </FormControl>
</Box>
