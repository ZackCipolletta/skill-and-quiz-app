try {
  // first we query the database and filter the 'users' collection for any user 
  // with an id field that matches the id of the currently logged in user.
  const userQuery = query(collection(db, "users"), where("id", "==", user.uid));
  // then we get a snapshot of the corresponding doc
  const querySnapshot = await getDocs(userQuery);

  // check if the snapshot exists (is not empty)
  if (!querySnapshot.empty) {

    // a querySnapshot is a collection, so we assign the first (and only) member of the collection to a variable
    const userDoc = querySnapshot.docs[0];

    // we then assign the favorite property of the categoryDoc to a variable so we can update it
    const { fav_Cats } = userDoc.data();







    const handleFavoriteButtonClick = async (categoryId) => {

      try {
        // first we query the database and filter the 'users' collection for any user 
        // with an id field that matches the id of the currently logged in user.
        const userQuery = query(collection(db, "users"), where("id", "==", user.uid));
        // then we get a snapshot of the corresponding doc
        const querySnapshot = await getDocs(userQuery);
    
        // check if the snapshot exists (is not empty)
        if (!querySnapshot.empty) {
    
          // a querySnapshot is a collection, so we assign the first (and only) member of the collection to a variable
          const userDoc = querySnapshot.docs[0];
    
          // we then assign the favorite property of the categoryDoc to a variable so we can update it
          const { fav_Cats } = userDoc.data();
    
          // Use categoryDoc.id as the actual document ID
          const userRef = doc(db, "users", userDoc.id);
    
          const updatedFavorites = [...fav_Cats, categoryId];
          //we then update the document with the id of the categoryDoc
          try {
            return await updateDoc(userRef, { fav_Cats: updatedFavorites  });
          } catch (error) {
            console.error("Error adding favorite category: ", error);
            throw error;
          }
        } else {
          throw new Error("User not found");
        }
      } catch (error) {
        console.error("Error updating favorite category: ", error);
        throw error;
      }
    };