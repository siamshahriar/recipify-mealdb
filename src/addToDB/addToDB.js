const addToDB = (data) => {
  let bookmarks = getFromDB();

  const exists = bookmarks.find((each) => each.idMeal === data.idMeal);

  if (exists) {
    return true;
  }

  bookmarks.push(data);
  localStorage.setItem("bookmark", JSON.stringify(bookmarks));
};

const getFromDB = () => {
  let bookmarks = [];
  const stored = localStorage.getItem("bookmark");

  if (stored) {
    bookmarks = JSON.parse(stored);
  }
  return bookmarks;
};

const clearAll = () => {
  localStorage.removeItem("bookmark");
};
const removeFavItem = (data) => {
  let bookmarks = getFromDB();

  const rests = bookmarks.filter((each) => each.idMeal !== data);

  bookmarks = rests;
  localStorage.setItem("bookmark", JSON.stringify(bookmarks));
};
export { addToDB, getFromDB, clearAll, removeFavItem };
