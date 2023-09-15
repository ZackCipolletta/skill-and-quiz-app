<TextField
  margin="normal"
  required
  fullWidth
  id="email"
  placeholder="connectlink@gmail.com"
  name="email"
  autoComplete="email"
  autoFocus
  className='input-field'
  value={email}
  onChange={handleEmailChange}
  error={!isValidEmail && email !== ''} // Only apply error style if email is not empty and not valid
  InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        {isValidEmail && (
          <IconButton edge="end" style={{ color: 'green' }}>
            <CheckCircleIcon />
          </IconButton>
        )}
      </InputAdornment>
    ),
    sx: (isValidEmail && email !== '')
      ? {
          '& fieldset': { borderColor: 'green !important' },
          '&:hover fieldset': { borderColor: 'green !important' },
        }
      : {},
  }}
/>
