import { Bounce, toast } from "react-toastify";
// 🔹 Get ReadBook Data From LocalStorage
const getStoredReadBook = () => {
  const storedBookSTR = localStorage.getItem("readList");
  if (storedBookSTR) {
    return JSON.parse(storedBookSTR);
  }
  return [];
};
// 🔹 Get WishList Data From LocalStorage
const getStoredWishlistBook = () => {
  const storedBookSTR = localStorage.getItem("wishList");
  if (storedBookSTR) {
    return JSON.parse(storedBookSTR);
  }
  return [];
};

//  LocalStorage Set Mars As Read Book
const addToReadLS = (id) => {
  const storedBookData = getStoredReadBook();

  if (storedBookData.includes(id)) {
    toast.warn("This ID is already added!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      theme: "dark",
      transition: Bounce,
    });
  } else {
    storedBookData.push(id);
    localStorage.setItem("readList", JSON.stringify(storedBookData));

    toast.success("Book added successfully!", {
      position: "top-right",
      autoClose: 2000,
      theme: "colored",
      transition: Bounce,
    });
  }
};
//  LocalStorage Set Mars As WishList
const addToWishlistLS = (id) => {
  const storedBookData = getStoredWishlistBook();

  if (storedBookData.includes(id)) {
    toast.warn("This book is already added in wishlist!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      theme: "dark",
      transition: Bounce,
    });
  } else {
    storedBookData.push(id);
    localStorage.setItem("wishList", JSON.stringify(storedBookData));

    toast.success("Wishlist added successfully!", {
      position: "top-right",
      autoClose: 2000,
      theme: "colored",
      transition: Bounce,
    });
  }
};

// 🔹  Remove ReadBook LS
const removeReadBookLS = (id) => {
  const storedBookData = getStoredReadBook();
  const newStoredData = storedBookData.filter((bookId) => bookId !== id);

  if (storedBookData.length === newStoredData.length) {
    toast.info("This book is not in the list!", {
      position: "top-right",
      autoClose: 2000,
      theme: "dark",
      transition: Bounce,
    });
  } else {
    localStorage.setItem("readList", JSON.stringify(newStoredData));
    toast.success("Book removed successfully!", {
      position: "top-right",
      autoClose: 2000,
      theme: "light",
      transition: Bounce,
    });
  }
};
// 🔹 Remove WishList LS
const removeWishlistLS = (id) => {
  const storedBookData = getStoredReadBook();
  const newStoredData = storedBookData.filter((bookId) => bookId !== id);

  if (storedBookData.length === newStoredData.length) {
    toast.info("This book is not in the list!", {
      position: "top-right",
      autoClose: 2000,
      theme: "dark",
      transition: Bounce,
    });
  } else {
    localStorage.setItem("readList", JSON.stringify(newStoredData));
    toast.success("Book removed successfully!", {
      position: "top-right",
      autoClose: 2000,
      theme: "light",
      transition: Bounce,
    });
  }
};

export {
  addToReadLS,
  addToWishlistLS,
  getStoredReadBook,
  getStoredWishlistBook,
  removeReadBookLS,
  removeWishlistLS,
};
