export const sessions = {
    list: {},
    // создаем и добавляем хэш в список
    create(user) {
        const hash = Math.random().toFixed(50)

        this.list[hash] = user

        return hash
    },
    remove(hash) {
        delete this.list[hash]
    }
}