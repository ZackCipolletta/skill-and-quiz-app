// ...

return (
  <Box style={{ marginTop: 35, paddingBottom: 5 }}>
    <Box name='name&Buttons' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 }}>
      {/* ... */}
    </Box>

    <Box name='tags'>
      {quizInfo.tags.map((tag, index) => (
        // ...
      ))}
    </Box>

    {isMobile && (
      <Box name='buttons' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 5 }}>
        <IconButton className='button-lightGray' /* ... */>
          <PiTagChevron />
        </IconButton>

        <IconButton className='button-lightGreen' /* ... */>
          <LuAward />
        </IconButton>

        <Button className='button-redButton' sx={{ padding: 0, marginTop: '0.2rem' }}>
          Delete
        </Button>

        <Button className='button-mediumBlue' sx={{ padding: 0, marginTop: '0.2rem' }}>
          Cancel
        </Button>
      </Box>
    )}

    <Box sx={{ mt: 3, mb: 5 }}>
      {/* ... */}
    </Box>
  </Box>
);
// ...
