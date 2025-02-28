import { useEffect, useState } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { useForm } from 'react-hook-form'
import { server } from '../../bff'
import { yupResolver } from '@hookform/resolvers/yup'
import { authFormSchema } from '@schemas'
import { Link, Navigate } from 'react-router-dom'
import { Button, Input, ValidationError } from '@components'
import { ROUTES, ROLE } from '@constants'
import { selectUserRole, setUser } from '@slices'

// TODO: подключить БД юзера: json-server --watch src/db.json --port 5180

export const Authorization = () => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            login: '',
            password: '',
        },
        resolver: yupResolver(authFormSchema),
    })

    
    const [serverError, setServerError] = useState(null)
    const store = useStore()
    const dispatch = useDispatch()
    const roleId = useSelector(selectUserRole)

    // запускаем reset, когда флаг wasLogout меняется в appReducer
    useEffect(() => {
        let currentWasLogout = store.getState().app.wasLogout

        return store.subscribe(() => {
            let previousWasLogout = currentWasLogout
            currentWasLogout = store.getState().app.wasLogout

            if (currentWasLogout !== previousWasLogout) {
                reset()
            }
        })
    }, [reset, store])

    const onSubmit = ({ login, password }) => {
        server.authorize(login, password).then(({ error, res }) => {
            if (error) {
                setServerError(`Ошибка запроса: ${error}`)
                return
            }
            // в res находится ключ в виде hash
            dispatch(setUser(res))
        })
    }

    const handleInputChange = () => setServerError(null)

    const formError = errors?.login?.message || errors?.password?.message

    const errorMessage = formError || serverError

    // редирект на главную при авторизации
    if (roleId !== ROLE.GUEST) {
        return <Navigate to={ROUTES.MAIN_PAGE} />
    }

    return (
        <div className="flex flex-col items-center justify-center mt-[200px]">
            <div className="flex flex-col items-center text-center rounded-[4px] form-shadow">
                <form
                    className="flex flex-col w-[350px] items-center justify-center bg-[white] px-[30px] pt-[20px] pb-[35px] rounded-[10px]"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <h2 className="font-semibold">Вход</h2>
                    <Input
                        type="text"
                        placeholder="Введите логин..."
                        {...register('login', { onChange: handleInputChange })}
                    />

                    <Input
                        type="password"
                        placeholder="Введите пароль"
                        {...register('password', { onChange: handleInputChange })}
                        showIcon={true}
                    />

                    <Button
                        type="submit"
                        className="text-[18px] font-[500] w-full h-[45px] text-[white] bg-[#2B8AFF] mb-[25px] border-0 rounded-[4px]"
                        disabled={!!formError}
                    >
                        Войти
                    </Button>
                    {errorMessage && (
                        <ValidationError>{errorMessage}</ValidationError>
                    )}
                </form>
            </div>

            <Link
                className="text-[15px] font-[400]mt-[30px] mt-[30px] "
                to={ROUTES.REGISTER}
            >
                Зарегистрироваться
            </Link>
        </div>
    )
}