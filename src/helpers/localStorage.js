import { userKey, authorizedUser, movieKey } from "../constants/storageKeys";

//Local Storage for array of USERS
export const getUsers = () => {
  const users = JSON.parse(localStorage.getItem(userKey));
  if (Array.isArray(users)) {
    return users;
  } else {
    return [];
  }
};

export const saveUser = (user) => {
  const users = getUsers();
  users.push(user); //adding user to the users []
  const usersString = JSON.stringify(users);
  localStorage.setItem(userKey, usersString);
};

//Local Storage for array of MOVIES

export const getMovies = () => {
  
  const movies = JSON.parse(localStorage.getItem(movieKey));
  if (Array.isArray(movies)) {
    return movies;
  } else {
    return [];
  }
};

export const saveMovie = (movie) => {
  const movies = getMovies();
  const user = getLoggedInUser();
  const valueToSave = {
    user: user,
    ...movie,
  };
  movies.push(valueToSave);
  const moviesString = JSON.stringify(movies);
  localStorage.setItem(movieKey, moviesString);
};

//Local Storage for checking which user is logged in

export const getLoggedInUser = () => {
  const user = localStorage.getItem(authorizedUser);
  return user;
};

export const saveLoggedInUser = (userEmail) => {
    localStorage.setItem(authorizedUser, userEmail)   
}

//Made a seperate file for saving and getting items from local storage so that this can be reused should it need be.
