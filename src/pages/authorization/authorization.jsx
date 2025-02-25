import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { server } from '../../bff'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Input, ValidationError } from '@components'
import { LINKS } from '@constants/links'
import { setUser } from '@actions'

const authFormSchema = yup.object().shape({
    login: yup
        .string()
        .required('Введите логин')
        .matches(
            /^\w+$/,
            'Неверно заполнен логин. Допускаются только буквы и цифры'
        )
        .min(3, 'Неверно заполнен логин. Минимум 3 символа')
        .max(15, 'Неверно заполнен логин. Максимум 15 символов'),
    password: yup
        .string()
        .required('Введите пароль')
        .matches(
            /^[\w#%]+$/,
            'Неверно заполнен пароль. Допускаются только буквы, цифры и знаки # %'
        )
        .min(6, 'Неверно заполнен пароль. Минимум 6 символов')
        .max(30, 'Неверно заполнен пароль. Максимум 30 символов'),
})

export const Authorization = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
     } = useForm({
        defaultValues: {
            login: '',
            password: '',
        },
        resolver: yupResolver(authFormSchema)
     })
    
    const [serverError, setServerError] = useState(null)

    const dispatch = useDispatch()
    
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

    const formError = errors?.login?.message || errors?.password?.message

    const errorMessage = formError || serverError
    
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
                        {...register('login', {
                            onChange: () => setServerError(null),
                        })}
                    />

                    <Input
                        type="password"
                        placeholder="Введите пароль"
                        {...register('password', {
                            onChange: () => setServerError(null),
                        })}
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
                to={LINKS.REG}
            >
                Зарегистрироваться
            </Link>
        </div>
    )
}