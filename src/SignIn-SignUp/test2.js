<Box sx={{ display: !isMobile ? 'flex' : 'none' }}>
  <Button className="button-darkMediumBlue" sx={{ mr: 1 }}
    onClick={(handlePreviewClick)}
  >
    Preview
  </Button>
  <Button className="button-darkMediumBlue" sx={{ mr: 1 }}
    onClick={handlePublishButtonClick}
  >
    Publish
  </Button>
</Box>;


<Box sx={{ display: 'flex' }}>
  <Button
    className="button-darkMediumBlue"
    onClick={handlePreviewClick}
    sx={{ mr: 1 }}
  >
    Preview
  </Button>
  <Button
    className="button-darkMediumBlue"
  >
    Publish</Button>
</Box>;