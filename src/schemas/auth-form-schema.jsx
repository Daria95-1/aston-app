import * as yup from 'yup'

export const authFormSchema = yup.object().shape({
    login: yup
        .string()
        .required('Введите логин')
        .matches(
            /^\w+$/,
            'Неверно заполнен логин: допускаются только буквы и цифры'
        )
        .min(3, 'Неверно заполнен логин: минимум 3 символа')
        .max(15, 'Неверно заполнен логин: максимум 15 символов'),
    password: yup
        .string()
        .required('Введите пароль')
        .matches(
            /^[\w#%]+$/,
            'Неверно заполнен пароль: допускаются только буквы, цифры и знаки # %'
        )
        .min(6, 'Неверно заполнен пароль: минимум 6 символов')
        .max(30, 'Неверно заполнен пароль: максимум 30 символов'),
})
