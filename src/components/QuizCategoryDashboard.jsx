
import '../Styles/Components.css';
import React, { useState, useEffect } from 'react';
import { Button, Box } from '@mui/material';
import SearchBar from './SearchBar';
import AddIcon from '@mui/icons-material/Add';
import CreateNewCategoryModal from './CreateNewCategoryModal';
import QuizCategories from './QuizCategories';
import DeleteModal from './DeleteModal';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { setCategoriesArray, addCategory, favoriteCategory, deleteCategory, searchCategories, resetCategories } from './redux/Categories';
import { deleteUser } from './redux/User';

export default function QuizCategoryDashboard(props) {
  const dispatch = useDispatch();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [selectedCategoryId, setSelectedCategoryId] = useState([]);
  const [categoryToDelete, setCategoryToDelete] = useState([]);

  const [createModalState, setCreateModalState] = useState(false);
  const [deleteModalState, setDeleteModalState] = useState(false);

  const catsArr = [
    { Name: "Science", Color: '#a7d7f9', id: 1, Favorite: true },
    { Name: "Maths", Color: '#67c27c', id: 2, Favorite: false },
    { Name: "English", Color: '#cfd9fa', id: 3, Favorite: true },
    { Name: "Cat4", Color: '#f4bbc7', id: 4, Favorite: false },
    { Name: "Cat5", Color: '#c0f889', id: 5, Favorite: false },
    { Name: "Cat6", Color: '#cfd9fa', id: 6, Favorite: true }
  ];

  const categoriesArray = useSelector((state) => state.categoriesArray);

  const [searchValue, setSearchValue] = useState(false);
  const [filteredCategories, setFilteredCategories] = useState([...categoriesArray]);

  const searching = (value) => {
    if (value.trim()) {
      setSearchValue(value);
      console.log(value);
      handleSearch(value);
    } else {
      setSearchValue(null);
    }
  };

  const handleSearch = (searchValue) => {
    // const filtered = categoriesArray.filter((cat) =>
    //   cat.Name.toLowerCase().includes(searchValue.toLowerCase())
    // );
    // setFilteredCategories(filtered);
    dispatch(searchCategories(searchValue));
  };

  const addCat = (newCat) => {
    dispatch(addCategory(newCat));
  };

  const handleCreateNewCategoryClick = () => {
    setCreateModalState(!createModalState);
  };

  const handleFavoriteButtonClick = (id) => {
    dispatch(favoriteCategory(id));
  };

  const handleDeleteButtonClick = (event, id, cat) => {
    setDeleteModalState(!deleteModalState);
    setCategoryToDelete(cat);
    setSelectedCategoryId(id);
  };

  const reset = () => {
    setSelectedCategoryId([]);
    setCategoryToDelete([]);
  };

  const handleDeleteConfirm = () => {
    setDeleteModalState(!deleteModalState);
    dispatch(deleteCategory(selectedCategoryId));
    reset();
  };

  const handleNoSearchValue = () => {
    dispatch(resetCategories());
  };


  return (
    <>
      <Box style={{ marginTop: '2rem', paddingBottom: '1rem' }} >
        <Box style={{
          display: !isMobile ? 'flex' : 'block',
          justifyContent: !isMobile ? 'space-between' : 'flex-start',
          alignItems: 'center'
        }}
        >
          <h1 className='darkBlue-text'>
            Quiz Board  {/* Google web font 'Anton' */}
          </h1>

          <Box style={{
            display: !isMobile ? 'flex' : 'block',
            alignItems: 'center'
          }}>
            <SearchBar
              value=""
              onChange={searching}
              onSearch={handleSearch}
              placeholder={"Search categories..."}
              options={categoriesArray.map((cat) => cat.Name)}
              handleNoSearchValue={handleNoSearchValue}
            />

            <Button
              className='navButton button-mediumBlue'
              style={!isMobile ? { marginLeft: '50px' } : { marginTop: 20 }}
              onClick={(event) => handleCreateNewCategoryClick(event, 'delete')}
            >
              <AddIcon />
              Create new category
            </Button>

          </Box>
        </Box>
        <CreateNewCategoryModal
          toggle={createModalState}
          handleCancel={handleCreateNewCategoryClick}
          handleAddNewCategory={addCat}
        />
      </Box>
      <QuizCategories
        categoriesArray={categoriesArray}
        deleteClick={handleDeleteButtonClick}
        favorite={handleFavoriteButtonClick}
      />
      <DeleteModal
        toggle={deleteModalState}
        handleClose={handleDeleteButtonClick}
        selectedCard={`"${categoryToDelete}" category`}
        handleDeleteConfirm={handleDeleteConfirm}
      />
    </>
  );
}