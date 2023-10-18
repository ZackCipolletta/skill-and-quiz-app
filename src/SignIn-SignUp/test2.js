<TableContainer component={Paper}>
  <Table size="small">
    <TableHead>
      <TableRow>
        <TableCell><h1>#</h1></TableCell>
        <TableCell><h1>Questions</h1></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
      </TableRow>
    </TableHead>
    <TableBody>

      {quizInfo.questions.map((question, i) => (
        <TableRow key={i}>
          <TableCell>{i + 1}</TableCell>
          <TableCell style={{ width: '40%' }}>
            {question.question}
            <Box name='answers'>
              {question.answers.map((answer, index) => (
                <Typography
                  key={index}
                  style={{
                    border: '1px solid #67c27c',
                    padding: '1px',
                    paddingLeft: '7px',
                    paddingRight: '7px',
                    borderRadius: '15px',
                    color: '#67c27c',
                    background: 'rgba(103, 194, 124, .09)',
                    marginRight: '5px', // Add margin to control spacing
                  }}
                >
                  {answer}
                </Typography>
              ))}
              
            </Box>
          </TableCell>
          <TableCell>
            <IconButton sx={{
              marginLeft: -1,
              marginRight: -3,
              transform: "scale(.7)"
            }}>
              <PiStar color='black' />
            </IconButton>
          </TableCell>
          <TableCell>
            <IconButton sx={{
              marginLeft: -1,
              marginRight: -1,
              transform: "scale(.7) scaleY(1.2)"
            }}>
              <PiPencilLineLight color='black' />
            </IconButton>
            <IconButton sx={{
              marginRight: -4,
              transform: "scale(.7) scaleY(1.2)"
            }}>
              <PiTrashThin color='red' />
            </IconButton>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
