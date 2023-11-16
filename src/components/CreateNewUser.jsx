import '../Styles/Components.css';
import React, { useState } from "react";
import { Button, Box, Typography, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { BiUser } from 'react-icons/bi';
import { LuMail } from 'react-icons/lu';
import { PiSuitcase } from "react-icons/pi";
import { FaChevronLeft } from "react-icons/fa";

// imported into 'Admin'

export default function CreateNewUser(props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [role, setRole] = useState('');
  const [focus, setFocus] = useState(false);

  const textFieldLabel = {
    fontFamily: 'Inter',
    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '1.5rem', // 150%
  };

  const customTextField = {
    background: '#FFF',
    width: !isMobile ? '25rem' : '15rem',
    height: '2.875rem',
    flexShrink: 0,
    marginTop: '.5rem'
  };

  const adornmentStyle = {
    color: '#a2a2a2',
    marginRight: '0.5rem',
    pt: '.25rem'
  };

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };


  return (

    <Box>

      <Box name="TopNav" style={{
        display: !isMobile ? 'flex' : 'block',
        justifyContent: !isMobile ? 'space-between' : 'flex-start',
        alignItems: 'center',
        marginTop: '2rem',
        paddingBottom: '1rem'
      }}
      >
        <h1 className='darkBlue-text'>
          User Board  {/* Google web font 'Anton' */}
        </h1>

        <Box name="BackButton" style={{
          display: !isMobile ? 'flex' : 'block', alignItems: 'center'
        }}>

          {/* 'ml' does not work here, we must use marginLeft */}
          <Button
            className='button-mediumBlue'
            style={{
              ...(!isMobile ? { marginLeft: '50px' } : { marginTop: 20 })
            }}
            onClick={props.toggleCreate}
          >
            <FaChevronLeft />
            Back
          </Button>
        </Box> {/* BackButton closes */}

      </Box> {/* TopNav closes */}


      <Box>
        <Box sx={{ mt: 3 }}>
          <div style={{ display: !isMobile ? 'flex' : null, alignItems: 'center' }}>
            <Box name='FirstNameBox'
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'left',
              }}
            >
              <Typography style={{ textFieldLabel }}>
                First Name
              </Typography>
              <TextField
                id="FirstName"
                placeholder="Enter first name here"
                name="FirstName"
                type="FirstName"
                className='input-field'
                size='small'
                sx={{ ...customTextField }}
                InputProps={{
                  // here we check if the value of firstName has been set or not (or if the user has begun 
                  // typing in the TextField), if not we show the BiUser icon, if so, it disappears 
                  // (along with the placeholder text). The same is true for the remaining text fields
                  startAdornment: firstName === '' ? (
                    <Box sx={{ ...adornmentStyle }}>
                      <BiUser />
                    </Box>
                  ) : null,
                  sx: { borderRadius: '0.375rem' },
                }}
                onChange={(e) => setFirstName(e.target.value)}
              />

            </Box> {/* first name box closes */}

            <Box name='LastNameBox' sx={{ ml: !isMobile ? 10 : null, mt: isMobile ? 3 : null }}>
              <Typography style={{ textFieldLabel }}>
                Last Name
              </Typography>
              <TextField
                id="LastName"
                placeholder="Enter last name here"
                name="LastName"
                type="LastName"
                className='input-field'
                size='small'
                sx={{ ...customTextField }}
                InputProps={{
                  startAdornment: lastName === '' ? (
                    <Box sx={{ ...adornmentStyle }}>
                      <BiUser />
                    </Box>
                  ) : null,
                  sx: { borderRadius: '0.375rem' }
                }}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Box>

          </div>
        </Box>

        < Box sx={{ mt: 3 }}>
          <Typography style={{ textFieldLabel }} >
            Email
          </Typography>
          <Box name='Email'
            style={{ display: 'flex', alignItems: 'center' }} >
            <TextField
              id="Email"
              placeholder="Enter email address here"
              name="Email"
              autoFocus
              className='input-field'
              size='small'
              sx={{ ...customTextField }}
              InputProps={{
                startAdornment: email === '' ? (
                  <Box sx={{ ...adornmentStyle }}>
                    <LuMail />
                  </Box>
                ) : null,
                sx: { borderRadius: '0.375rem' }
              }}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
        </Box >


        <Box sx={{ mt: 3 }}>
          <Typography style={{ textFieldLabel }} >
            Role
          </Typography>
          <FormControl size='small'>
            <InputLabel id="SelectRole"
              sx={{ color: "#a2a2a2", marginTop: '.5rem' }}
            >
              {/* here we check to see if a role has been selected and if the input field is in focus. If the role
              does not have a value and the field is not in focus, we display the suitcase icon. Otherwise it disappears. */}
              {role === '' && !focus &&
                (<Box sx={{
                  display: 'inline-flex',
                  marginRight: '0.5rem',
                  pt: '.25rem',
                  transform: "scale(1.2)"
                }}>
                  <PiSuitcase />
                </Box>)}
              Select Role
            </InputLabel>
            <Box>
              <Select
                labelId='SelectRole'
                id='SelectRole'
                value={role}
                onChange={handleRoleChange}
                onFocus={handleFocus}
                // onBlur handles when an element loses focus 
                onBlur={handleBlur}
                label='SelectRole'
                sx={{ ...customTextField, borderRadius: '.375rem', height: '2.65rem' }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'User'}>User</MenuItem>
                <MenuItem value={'Creator'}>Creator</MenuItem>
                <MenuItem value={'Admin'}>Admin</MenuItem>
              </Select>
            </Box>

          </FormControl>
        </Box>

      </Box>
      <Button sx={{ display: 'block', margin: '0 auto', mt: 5 }}
        className="button-mediumBlue"
      // onClick={handleAddClick}
      >
        Create
      </Button>
    </Box>
  );

}

