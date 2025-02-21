export const addUser = (login, password) =>
    fetch('http://localhost:5180/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
            login,
            password,
            role_id: 1,
        }),
    })