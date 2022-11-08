import { userKey } from "../constants/storageKeys";

export const getUsers = () => {
    const usersString = localStorage.getItem(userKey)
    const users = JSON.parse(usersString)
    if(Array.isArray(users)) {
        return users;
    } else {
        return []
    }
    
}

export const saveUser = (user) => {
    const users = getUsers() 
    users.push(user) //adding user to the users []
    const usersString = JSON.stringify(users);
    localStorage.setItem(userKey, usersString);
};

//Made a seperate file for saving and getting items from local storage so that this can be reused should it need be.