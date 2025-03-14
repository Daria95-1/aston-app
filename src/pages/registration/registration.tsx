import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useAuthSubmit } from '@hooks'
import { yupResolver } from '@hookform/resolvers/yup'
import { regFormSchema } from '@schemas'
import {
    FormButton,
    ValidationError,
    TextInput,
    PasswordInput,
    FormContainer,
} from '@components'
import { ROUTES, ROLE } from '@constants'
import { selectUserRole } from '@slices/user-slice'

type FormData = {
    login: string
    password: string
    passcheck: string
}

export const Registration = () => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        defaultValues: {
            login: '',
            password: '',
            passcheck: '',
        },
        resolver: yupResolver(regFormSchema),
    })

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const roleId = useSelector(selectUserRole)

    const { onSubmit, serverError, clearServerError } = useAuthSubmit(true)

    const handleInputChange = () => {
        clearServerError()
    }

    const formError =
        errors?.login?.message ||
        errors?.password?.message ||
        errors?.passcheck?.message
    const errorMessage = formError || serverError

    const handleFormSubmit: SubmitHandler<FormData> = (data) => {
        onSubmit(data, reset)
    }

    if (roleId !== ROLE.GUEST) {
        return <Navigate to={ROUTES.MAIN_PAGE} />
    }

    return (
        <FormContainer linkTo={ROUTES.LOGIN} linkText="Войти">
            <form
                className="flex flex-col w-[350px] items-center justify-center bg-[white] px-[30px] pt-[20px] pb-[35px] rounded-[10px]"
                onSubmit={handleSubmit(handleFormSubmit)}
            >
                <h2 className="text-[20px] font-semibold mb-3">Регистрация</h2>
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
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                    onChange={handleInputChange}
                />
                <PasswordInput
                    register={register}
                    name="passcheck"
                    placeholder="Повторите пароль..."
                    showPassword={showConfirmPassword}
                    setShowPassword={setShowConfirmPassword}
                    onChange={handleInputChange}
                />
                <FormButton
                    type="submit"
                    className="text-[16px] font-[500] w-full h-[45px] text-[white] bg-[#2B8AFF] mb-[25px] border-0 rounded-[4px] cursor-pointer"
                    disabled={!!formError}
                >
                    Зарегистрироваться
                </FormButton>
                {errorMessage && (
                    <ValidationError>{errorMessage}</ValidationError>
                )}
            </form>
        </FormContainer>
    )
}
