const handleFavoriteButtonClick = async (categoryId) => {
  const categoryRef = doc(db, "categories", categoryId);

  try {
    const docSnapshot = await getDoc(categoryRef);

    if (docSnapshot.exists()) {
      const currentFavoriteValue = docSnapshot.data().Favorite;

      // Toggle the 'Favorite' property
      await updateDoc(categoryRef, { Favorite: !currentFavoriteValue });
    } else {
      console.error("Document with ID does not exist:", categoryId);
    }
  } catch (error) {
    console.error("Error updating document:", error);
  }
};
