<Box name='answers' style={{ display: 'flex', flexWrap: 'wrap', gap: 2, marginTop: 5 }}>
  {q.answers.map((answer, index) => (
    <Typography
      key={index}
      style={{
        marginTop: !isMobile ? 0 : 5,
        border: q.correct === index || (Array.isArray(q.correct) && q.correct.includes(index)) ?
          '1px solid #478bfe'
          : '1px solid #67c27c',
        // padding: 1,
        paddingLeft: 7,
        paddingRight: 7,
        marginRight: 5,
        borderRadius: '12px',
        color: q.correct === index || (Array.isArray(q.correct) && q.correct.includes(index)) ?
          '#478bfe' : '#67c27c',
        background:
          q.correct === index || (Array.isArray(q.correct) && q.correct.includes(index)) ?
            'rgba(208, 225, 255, .4)'
            : 'rgba(103, 194, 124, .09',
      }}
    >
      {optionsArray[index]}. {answer}
    </Typography>
  ))}
  {q.answers.length === 0 && (
    <TextField
      margin="normal"
      placeholder="Enter your answer here"
      name="Answer"
      className='input-field'
      size='small'
      sx={{
        width: 350,
      }}
      InputProps={{ sx: { borderRadius: 2 } }}
    />
  )}
</Box>
