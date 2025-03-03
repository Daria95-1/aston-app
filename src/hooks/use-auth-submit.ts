import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '@slices/user-slice'
import { server } from '@bff'

type SubmitData = {
    login: string
    password: string
}

type ServerResponse = {
    error?: string
    res: {
        hash: string
    }
}

type UseAuthSubmitReturn = {
    onSubmit: (data: SubmitData, reset: () => void) => void
    serverError: string | null
    clearServerError: () => void // Функция для очистки ошибки
}

export const useAuthSubmit = (isRegister = false): UseAuthSubmitReturn => {
    const dispatch = useDispatch()
    const [serverError, setServerError] = useState<string | null>(null)

    // Функция для очистки ошибки
    const clearServerError = () => {
        setServerError(null)
    }

    const onSubmit = (
        { login, password }: SubmitData,
        reset: () => void
    ): void => {
        const action = isRegister ? server.register : server.authorize

        action(login, password).then(({ error, res }: ServerResponse) => {
            if (error) {
                setServerError(`Ошибка запроса: ${error}`)
                return
            }

            // Очистим форму при успешном входе/регистрации
            reset()

            // в res находится ключ в виде hash
            dispatch(setUser(res))
            // при перезагрузке не разлогиниваемся
            sessionStorage.setItem('userData', JSON.stringify(res))
        })
    }

    return { onSubmit, serverError, clearServerError }
}