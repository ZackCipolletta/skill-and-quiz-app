<CardActions style={{ all: "initial" }}>
  {/* scale enlarges the icons in both X and Y directions, ScaleY stretches left right  */}
  <IconButton
    sx={{
      marginLeft: '5px',
      marginRight: '-25px',
      transform: "scale(.7)"
    }}
    onClick={(event) => handleFavoriteButtonClick(event, cardInfo.id)}
  >
    {cardInfo.Favorite ? (
      <PiStarFill color='gold' />
    ) : (
      <PiStar color='black' />
    )}
  </IconButton>

  {cardType === "quiz" && (
    user === cardInfo.Creator ? (
      <IconButton
        sx={{
          marginRight: '-5px',
          transform: "scale(.7) scaleY(1.2)"
        }}
        onClick={(event) => handleDeleteButtonClick(event, cardInfo.id, cardInfo.Name)}
      >
        <PiTrashThin color='red' />
      </IconButton>
    ) : user && (
      <IconButton
        sx={{
          marginRight: '-5px',
          transform: "scale(.7) scaleY(1.2)"
        }}
        onClick={(event) => handleDeleteButtonClick(event, cardInfo.id, cardInfo.Name)}
      >
        <PiTrashThin color='red' />
      </IconButton>
    )
  )}
</CardActions>
