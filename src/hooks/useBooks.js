import axios from "axios";
import { useEffect, useState } from "react";

const useBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    axios("../booksData.json")
      .then((data) => setBooks(data.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { books, loading, error };
};

export default useBooks;
