import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { Authorization } from '@pages'
import { vi } from 'vitest'
import { useAuthSubmit } from '@hooks'
import { ROUTES } from '@constants'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../../store'

// Мокаем хук useAuthSubmit для успешного рендеринга формы авторизации
vi.mock('@hooks', () => ({
    useAuthSubmit: vi.fn().mockReturnValue({
        onSubmit: vi.fn(),
        serverError: null,
        clearServerError: vi.fn(),
    }),
}))

describe('Authorization', () => {
    // 1. Тестирование рендеринга формы авторизации
    it('should render the login form', () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Authorization />
                </MemoryRouter>
            </Provider>
        )

        // Проверяем, что поля для логина и пароля присутствуют
        expect(
            screen.getByPlaceholderText('Введите логин...')
        ).toBeInTheDocument()
        expect(
            screen.getByPlaceholderText('Введите пароль...')
        ).toBeInTheDocument()
        // Проверяем наличие кнопки "Войти"
        expect(screen.getByText('Войти')).toBeInTheDocument()
    })

    // 2. Тестирование ошибки при неправильном вводе данных
    it('should show error message when login is incorrect', async () => {
        // Мокаем хук с ошибкой авторизации
        useAuthSubmit.mockReturnValue({
            onSubmit: vi.fn(),
            serverError: 'Ошибка запроса: Неверные данные',
            clearServerError: vi.fn(),
        })

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Authorization />
                </MemoryRouter>
            </Provider>
        )

        // Заполняем поля с неверными данными
        fireEvent.change(screen.getByPlaceholderText('Введите логин...'), {
            target: { value: 'incorrectUser' },
        })
        fireEvent.change(screen.getByPlaceholderText('Введите пароль...'), {
            target: { value: 'wrongPassword' },
        })

        // Кликаем по кнопке "Войти"
        fireEvent.click(screen.getByText('Войти'))

        // Проверяем, что отображается сообщение об ошибке
        await waitFor(() => {
            expect(
                screen.getByText('Ошибка запроса: Неверные данные')
            ).toBeInTheDocument()
        })
    })

    // 3. Тестирование редиректа после успешной авторизации
    it('should navigate to main page when authorized', async () => {
        // Мокаем хук с успешной авторизацией
        useAuthSubmit.mockReturnValue({
            onSubmit: vi.fn(),
            serverError: null,
            clearServerError: vi.fn(),
        })

        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={[ROUTES.LOGIN]}>
                    <Authorization />
                </MemoryRouter>
            </Provider>
        )

        // Заполняем поля с правильными данными
        fireEvent.change(screen.getByPlaceholderText('Введите логин...'), {
            target: { value: 'ivan' },
        })
        fireEvent.change(screen.getByPlaceholderText('Введите пароль...'), {
            target: { value: 'qwe123' },
        })

        // Кликаем по кнопке "Войти"
        fireEvent.click(screen.getByText('Войти'))

        // Ожидаем редирект на главную страницу после успешной авторизации
        await waitFor(() => {
            expect(window.location.pathname).toBe(ROUTES.MAIN_PAGE)
        })
    })
})