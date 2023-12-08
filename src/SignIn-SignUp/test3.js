import { query, collection, orderBy, startAt, getDocs } from 'firebase/firestore';

const handleSearch = async (searchValue) => {
  // Convert the search term to lowercase for a case-insensitive search
  const searchTermLower = searchValue.toLowerCase();

  // Construct a query to fetch documents where the lowercase 'Name' field contains the lowercase search term
  const searchQuery = query(
    collection(db, 'categories'),
    orderBy('Name'),
    startAt(searchTermLower)
  );

  try {
    // Execute the query
    const querySnapshot = await getDocs(searchQuery);

    // Extract the data from the query snapshot
    const searchedCategories = querySnapshot.docs.map(doc => doc.data());

    setCategories(searchedCategories);
  } catch (error) {
    console.error('Error searching categories in Firestore:', error);
  }
};
