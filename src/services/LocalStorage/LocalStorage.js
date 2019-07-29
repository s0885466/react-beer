const key = 'beers';

const isEmptyLocalStorage = () => {
    return localStorage.getItem(key) === null
};

const getLocalStorage = () => {
    const str = localStorage.getItem(key);
    return JSON.parse(str);
};

const addLocalStorage = (id) => {
    if (isEmptyLocalStorage()) {
        localStorage.setItem(key, JSON.stringify([id]));
    } else {
        const arr = getLocalStorage();
        if (!arr.includes(id)) {
            arr.push(id);
            localStorage.setItem(key, JSON.stringify(arr));
        }
    }
};

const removeLocalStorage = (id) => {
    const arr = getLocalStorage();
    const newArr = arr.filter(el => el !== id);
    localStorage.setItem(key, JSON.stringify(newArr));
};

export {getLocalStorage, addLocalStorage, removeLocalStorage};
