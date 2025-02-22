import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Input } from '@components'

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
    
    const onSubmit = () => { }
    // время 14:03
    
    return (
        <div className="flex flex-col items-center justify-center mt-[150px]">
            <div className="flex flex-col items-center text-center p-12 gap-3 shadow rounded-xl">
                <h2 className="text-xl font-semibold">Авторизация</h2>
                <form
                    className="flex flex-col w-full mobile:w-80 gap-3"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Input
                        type="text"
                        placeholder="Введите логин..."
                        {...register('login')}
                    />

                    <div className="relative w-full">
                        <Input
                            type=""
                            placeholder="Введите пароль"
                            {...register('login')}
                        />
                        <Button
                            type="submit"
                            className="absolute inset-y-1 right-0 px-3 flex items-center focus:outline-none text-gray-400"
                        >
                            <Icon
                                className={`${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}
                            />
                        </Button>
                    </div>

                    <Button
                        className="button h-12"
                        type="submit"
                        disabled={!!formError}
                    >
                        Войти
                    </Button>
                </form>
            </div>

            <Link className="font-normal mt-6 text-lg" to="/register">
                Регистрация
            </Link>
        </div>
    )
}