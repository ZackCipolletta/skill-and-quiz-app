import { ThemeProvider } from '@mui/material/styles'; // Import ThemeProvider

// ... (other imports and code)

function SignIn() {
  // ... (other code)

  return (
    <ThemeProvider theme={theme}> {/* Wrap your component with ThemeProvider */}
      <div className="SignUp-SignIn">
        {/* ... (rest of your component code) */}
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          placeholder="Placeholder"
          name="email"
          autoComplete="email"
          autoFocus
          className='input-field'
          // ... (other props)
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {isValidEmail && (
                  <IconButton edge="end" color="valid"> {/* Use "valid" as the color */}
                    <CheckCircleIcon />
                  </IconButton>
                )}
              </InputAdornment>
            ),
            sx: isValidEmail
              ? {
                '& fieldset': { borderColor: theme.palette.valid.main + ' !important' }, // Use the custom "valid" color
                '&:hover fieldset': { borderColor: theme.palette.valid.main + ' !important' }, // Use the custom "valid" color
              }
              : {},
          }}
        />
        {/* ... (rest of your component code) */}
      </div>
    </ThemeProvider>
  );
}

export default SignIn;
