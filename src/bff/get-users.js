// получаем пользователей из БД
export const getUsers = () =>
    fetch('http://localhost:5180/users').then((loadedUsers) => loadedUsers.json)
