return (
  <>
  <div style={{ marginTop: '20px' }} >

    {!isMobile ? (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}
    >
      ) : (
      <div style={{
        display: 'block', // Change 'flex' to 'block'
        // justifyContent: 'space-between', // Delete
        alignItems: 'center'
      }}
      >
        )
    }
        <h1 className='darkBlue-text'>
          Quiz Board  {/* Google web font 'Anton' */}
        </h1>

        <div style={{
          display: 'flex',
          alignItems: 'center'
        }}>
          {/* <div style={{
            display: 'block', // Change 'flex' to 'block'
            alignItems: 'center'
          }}> */}


          <SearchBar />

          <Button
            className='button-mediumBlue'
            style={{ marginLeft: '50px' }}
            onClick={(event) => handleCreateNewCategoryClick(event, 'delete')}
          >
            <AddIcon />
            Create new category
          </Button>

        </div>
      </div>
      <CreateNewCategoryModal
        toggle={createModalState}
        handleCancel={handleCreateNewCategoryClick}
        handleAddNewCategory={addCategory}
      />
    </div>
    <QuizCategories
      categoriesArray={categoriesArray}
      deleteClick={handleDeleteButtonClick}
      favorite={handleFavoriteButtonClick}
    />
    <DeleteModal
      toggle={deleteModalState}
      handleClose={handleDeleteButtonClick}
      selectedCard={`"${deleteCategory}" category`}
      handleDeleteConfirm={handleDeleteConfirm}
    />
  </>
  );