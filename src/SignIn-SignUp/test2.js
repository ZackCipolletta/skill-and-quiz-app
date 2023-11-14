return (
  <Box style={{ marginTop: 35, paddingBottom: 5 }}>
    <Box sx={{ mt: 3, mb: 5 }}>
      <TableContainer sx={{
        border: '1px solid #E6E6E6',
        borderRadius: '0.9375rem',
        overflow: 'hidden'
      }}>
        <Table>
          <TableHead>
            <TableRow style={{
              color: '#1E1E1E',
              fontFamily: 'Anton',
              fontSize: '2rem',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '100%'
            }}>
              <TableCell sx={{
                borderRight: '1px solid #E6E6E6',
                textAlign: 'center',
                borderBottom: '1px solid #E6E6E6',
              }}>
                <h2>#</h2>
              </TableCell>
              <TableCell sx={{
                textAlign: 'center',
                borderBottom: '1px solid #E6E6E6',
              }}>
                <h2>Name</h2>
              </TableCell>
            </TableRow>
          </TableHead>

          {/* Sort userInfo by score high to low, then map onto this template. The userInfo as a whole is represented by 'u' */}
          {userInfo.users.sort((a, b) => b.score - a.score).map((u, i, arr) => (
            <TableRow key={i} sx={{ '&:hover': { backgroundColor: '#f8fafe' } }}>
              <TableCell sx={{
                borderRight: '1px solid #E6E6E6',
                fontWeight: 'bold',
                textAlign: 'center',
                borderBottom: i === arr.length - 1 ? 'none' : '1px solid #E6E6E6'
              }}>
                {i + 1}
              </TableCell>

              <TableCell sx={{
                width: 750,
                marginTop: 0,
                marginBottom: 0,
                paddingTop: 0,
                paddingBottom: 0
              }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Typography style={{
                    marginLeft: 10,
                    fontFamily: 'Inter',
                    fontSize: '1.75rem',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: '100%'
                  }}>
                    {u.userName}
                  </Typography>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </Table>
      </TableContainer>
    </Box>
  </Box>
);
