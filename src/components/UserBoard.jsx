import '../Styles/Components.css';
import React, { useState } from "react";
import {
  Box, Button, TableContainer, Table, TableHead,
  Typography, TableRow, TableCell
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import SearchBar from "./SearchBar";
import AddIcon from '@mui/icons-material/Add';
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { setUserInfo } from "./redux/User";

// imported into 'Admin'

export default function UserBoard(props) {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // const [userInfo, setUserInfo] = useState({
  //   users: [
  //     {
  //       firstName: 'FirstName1',
  //       lastName: 'LastName1',
  //       userImage: 'Single',
  //       score: 700,
  //     },
  //     {
  //       firstName: 'FirstName2',
  //       lastName: 'LastName2',
  //       userImage: 'Single',
  //       score: 500,
  //     },
  //     {
  //       firstName: 'FirstName3',
  //       lastName: 'LastName3',
  //       userImage: 'Single',
  //       score: 800,
  //     },
  //     {
  //       firstName: 'FirstName4',
  //       lastName: 'LastName4',
  //       userImage: 'Single',
  //       score: 900,
  //     },
  //     {
  //       firstName: 'FirstName5',
  //       lastName: 'LastName5',
  //       userImage: 'Single',
  //       score: 600,
  //     },
  //   ],
  // });

  const onUserClick = (id) => {
    props.selectUser(id);
    console.log('from inside UserBoard, user id: ' + id);
    props.toggleUserDetails();
  };

  const printUsers = () => {
    console.log(users);
  };

  const { users } = useSelector((state) => state.userInfo);

  const headerCellStyle = {
    borderBottom: '1px solid #E6E6E6',
    textAlign: 'center',
    width: '15%'
  };

  const tableBodyCellStyle = {
    width: "15%",
    textAlign: 'center'
  };

  const textStyle = {
    marginLeft: '1rem',
    fontFamily: 'Inter',
    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '100%', // 1.75rem
    cursor: 'pointer'
  };

  const formatDate = (dateString) => {
    const parts = dateString.split('/');
    const formattedDate = new Date(`${parts[1]}/${parts[0]}/${parts[2]}`);

    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = monthNames[formattedDate.getMonth()];
    const day = formattedDate.getDate();
    const year = formattedDate.getFullYear();
    return `${month} ${day}, ${year}`;
  };


  return (
    <Box style={{ marginTop: '2rem', paddingBottom: '1rem' }}>

      <Box name="TopNav" style={{
        display: !isMobile ? 'flex' : 'block',
        justifyContent: !isMobile ? 'space-between' : 'flex-start',
        alignItems: 'center'
      }}
      >
        <h1 className='darkBlue-text'>
          User Board  {/* Google web font 'Anton' */}
        </h1>

        <Box name="Search&Button" style={{
          display: !isMobile ? 'flex' : 'block',
          alignItems: 'center'
        }}>
          <SearchBar />

          {/* 'ml' does not work here, we must use marginLeft */}
          <Button
            className='button-mediumBlue'
            style={{
              ...(!isMobile ? { marginLeft: '50px' } : { marginTop: 20 })
            }}
            onClick={props.toggleCreate}
          >
            <AddIcon />
            Create new user
          </Button>
        </Box> {/* Search&Button closes */}

      </Box> {/* TopNav closes */}



      <Box sx={{ mt: 3, mb: 5 }}>
        <TableContainer sx={{ border: '1px solid #E6E6E6', borderRadius: '0.9375rem', overflow: 'hidden' }}>
          <Table>
            <TableHead>
              <TableRow style={{ color: '#1E1E1E', fontFamily: 'Anton', }}>
                <TableCell
                  sx={{
                    borderRight: '1px solid #E6E6E6',
                    borderBottom: '1px solid #E6E6E6',
                    width: '5%',
                    textAlign: 'left'
                  }}
                  size="small"
                >
                  <h2>#</h2>
                </TableCell>

                <TableCell sx={{
                  paddingLeft: '2rem',
                  borderBottom: '1px solid #E6E6E6',
                  textAlign: 'left',
                  width: '30%',
                }}
                  size="small"
                >
                  <h2>Name</h2>
                </TableCell>
                <TableCell sx={{ ...headerCellStyle }} size="small">
                  <h2>Quizzes Created</h2>
                </TableCell>
                <TableCell sx={{ ...headerCellStyle }} size="small">
                  <h2>Quizzes Attempted</h2>
                </TableCell>
                <TableCell sx={{ ...headerCellStyle }} size="small">
                  <h2>Quizzes Won</h2>
                </TableCell>
                <TableCell sx={{ ...headerCellStyle }} size="small">
                  <h2>Join Date</h2>
                </TableCell>
              </TableRow>
            </TableHead>

            {/* we sort userInfo by score high to low, then map onto this template. 
            The userInfo as a whole is represented by 'u' */}
            {/* because arrays in JS are immutable, we must first create a copy of the array so that we can sort it */}
            {users.map((u, i, arr) => (
              // {props.userInfo.users.sort((a, b) => b.score - a.score).map((u, i, arr) => (

              <TableRow key={i}
                sx={{ '&:hover': { backgroundColor: '#f8fafe' } }}>
                <TableCell
                  sx={{
                    width: '5%',
                    borderRight: '1px solid #E6E6E6',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    // in order to remove the bottom border of the table, we check to see if the index we are rendering
                    // is the last number in the array, if so we don't want to render a bottom border.
                    borderBottom: i + 1 === arr.length ? 'none' : '1px solid #E6E6E6'
                  }}
                >
                  {/* we use the index (i) to add a number for each user when it is displayed */}
                  {i + 1}
                </TableCell>

                {/* here we display the users information */}
                <TableCell
                  sx={{
                    textAlign: 'left',
                    width: '20%',
                    marginTop: 0,
                    marginBottom: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    borderBottom: i === (arr.length - 1) ? 'none' : '1px solid #E6E6E6',
                  }}
                >
                  <Box>
                    {/* here is the username  */}
                    <Typography style={{ ...textStyle }}
                      onClick={() => onUserClick(u.id)}
                    // onClick={() => props.selectUser(u.id)}
                    >
                      {u.firstName} {u.lastName}
                    </Typography>
                    <Typography style={{ ...textStyle, marginTop: '.25rem', color: 'rgba(0, 0, 0, 0.4)' }}>
                      {u.email}
                    </Typography>
                  </Box>

                </TableCell>

                <TableCell sx={{ ...tableBodyCellStyle }}>
                  <Typography>
                    {u.created}
                  </Typography>
                </TableCell>
                <TableCell sx={{ ...tableBodyCellStyle }}>
                  <Typography>
                    {u.attempted}
                  </Typography>
                </TableCell>
                <TableCell sx={{ ...tableBodyCellStyle }}>
                  <Typography>
                    {u.won}
                  </Typography>
                </TableCell>
                <TableCell sx={{ ...tableBodyCellStyle }}>
                  <Typography>
                    {u.joinDate && formatDate(u.joinDate)}
                  </Typography>
                </TableCell>


              </TableRow>
            ))}

          </Table>
        </TableContainer>

      </Box>

    </Box >
  );
}


