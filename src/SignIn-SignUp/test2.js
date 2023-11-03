{userInfo.users.map((u, i) => (
  <TableRow
    key={i}
    sx={{
      '&:hover': {
        backgroundColor: '#f8fafe',
        // border: '2px solid #3ea7f2 !important'
      },
      // Apply the font color class to the TableRow
      '&.$custom-font-color': {
        color: i < 3 ? (i === 0 ? 'color1' : i === 1 ? 'color2' : 'color3') : 'defaultColor',
        // Define 'color1', 'color2', 'color3', and 'defaultColor' as your desired font colors
      }
    }}
    className={i < 3 ? fontColorClass : ''}
  >
    <TableCell
      sx={{
        borderRight: '1px solid #e0e0e0',
        fontWeight: 'bold',
        borderBottom: "none",
      }}
    >
      {i + 1}
    </TableCell>

    <TableCell
      sx={{
        width: 750,
        borderRight: '1px solid #e0e0e0',
        borderBottom: "none",
        marginTop: 0,
        marginBottom: 0,
        paddingTop: 0,
        paddingBottom: 0
      }}
    >
      {/* Rest of your TableRow content */}
    </TableCell>

    <TableCell
      sx={{
        borderRight: '1px solid #e0e0e0',
        fontWeight: 'bold',
        borderBottom: "none",
      }}
    >
      {u.score}
    </TableCell>
  </TableRow>
))}




{userInfo.users.map((u, i) => {
  // Define the font color based on the value of 'i'
  const fontColor = i < 3 ? (i === 0 ? 'green' : i === 1 ? 'red' : 'blue') : 'defaultColor';

  return (
    <TableRow
      key={i}
      sx={{
        '&:hover': {
          backgroundColor: '#f8fafe',
          // border: '2px solid #3ea7f2 !important'
        }
      }}
      className={i < 3 ? fontColorClass : ''}
    >
      <TableCell
        sx={{
          borderRight: '1px solid #e0e0e0',
          fontWeight: 'bold',
          borderBottom: "none",
          color: fontColor // Apply the font color here
        }}
      >
        {i + 1}
      </TableCell>

      <TableCell
        sx={{
          width: 750,
          borderRight: '1px solid #e0e0e0',
          borderBottom: "none",
          marginTop: 0,
          marginBottom: 0,
          paddingTop: 0,
          paddingBottom: 0
        }}
      >
        {/* Rest of your TableRow content */}
      </TableCell>

      <TableCell
        sx={{
          borderRight: '1px solid #e0e0e0',
          fontWeight: 'bold',
          borderBottom: "none",
          color: fontColor // Apply the font color here
        }}
      >
        {u.score}
      </TableCell>
    </TableRow>
  );
});
}





{userInfo.users.map((u, i) => (
  <TableRow
    key={i}
    sx={{
      '&:hover': {
        backgroundColor: '#f8fafe',
        // border: '2px solid #3ea7f2 !important'
      },
      // Apply the font color class to the TableRow
      '&.$custom-font-color': {
        color: i < 3 ? (i === 0 ? 'color1' : i === 1 ? 'color2' : 'color3') : 'defaultColor',
        
        // Define 'color1', 'color2', 'color3', and 'defaultColor' as your desired font colors
      }
    }}
    className={i < 3 ? fontColorClass : ''}
  >
    <TableCell
      sx={{
        borderRight: '1px solid #e0e0e0',
        fontWeight: 'bold',
        borderBottom: "none",
      }}
    >
      {i + 1}
    </TableCell>

    <TableCell
      sx={{
        width: 750,
        borderRight: '1px solid #e0e0e0',
        borderBottom: "none",
        marginTop: 0,
        marginBottom: 0,
        paddingTop: 0,
        paddingBottom: 0
      }}
    >
      {/* Rest of your TableRow content */}
    </TableCell>

    <TableCell
      sx={{
        borderRight: '1px solid #e0e0e0',
        fontWeight: 'bold',
        borderBottom: "none",
      }}
    >
      {u.score}
    </TableCell>
  </TableRow>
))}