import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useAuthSubmit } from '@hooks'
import { yupResolver } from '@hookform/resolvers/yup'
import { authFormSchema } from '@schemas'
import { Navigate } from 'react-router-dom'
import {
    FormButton,
    TextInput,
    PasswordInput,
    ValidationError,
    FormContainer
} from '@components'
import { ROUTES, ROLE } from '@constants'
import { selectUserRole } from '@slices/user-slice'

// TODO: json-server --watch src/db.json --port 5180

type FormData = {
    login: string
    password: string
}

export const Authorization = () => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        defaultValues: {
            login: '',
            password: '',
        },
        resolver: yupResolver(authFormSchema),
    })

    const [showPassword, setShowPassword] = useState(false)
    const roleId = useSelector(selectUserRole)

    // Подключаем хук для авторизации
    const { onSubmit, serverError, clearServerError } = useAuthSubmit(false) // false для авторизации

    const handleInputChange = () => {
        clearServerError()
    }

    const formError = errors?.login?.message || errors?.password?.message
    const errorMessage = formError || serverError

    const handleFormSubmit: SubmitHandler<FormData> = (data) => {
        onSubmit(data, reset)
    }

    // редирект на главную при авторизации
    if (roleId !== ROLE.GUEST) {
        return <Navigate to={ROUTES.MAIN_PAGE} />
    }

    return (
        <FormContainer linkTo={ROUTES.REGISTER} linkText="Зарегистрироваться">
            <form
                className="flex flex-col w-[350px] items-center justify-center bg-[white] px-[30px] pt-[20px] pb-[35px] rounded-[10px]"
                onSubmit={handleSubmit(handleFormSubmit)}
            >
                <h2 className="text-[20px] font-semibold mb-3">Вход</h2>
                <TextInput
                    register={register}
                    name="login"
                    placeholder="Введите логин..."
                    onChange={handleInputChange}
                />
                <PasswordInput
                    register={register}
                    name="password"
                    placeholder="Введите пароль..."
                    onChange={handleInputChange}
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                />
                <FormButton
                    type="submit"
                    className="text-[16px] font-[500] w-full h-[45px] text-[white] bg-[#2B8AFF] mb-[25px] border-0 rounded-[4px] cursor-pointer"
                    disabled={!!formError}
                >
                    Войти
                </FormButton>
                {errorMessage && (
                    <ValidationError>{errorMessage}</ValidationError>
                )}
            </form>
        </FormContainer>
    )
}
