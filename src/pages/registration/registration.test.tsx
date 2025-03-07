import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { Registration } from '@pages'
import { vi } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../../store'
import { ROUTES } from '@constants'

// Мокаем хук useAuthSubmit
vi.mock('@hooks', () => ({
    useAuthSubmit: vi.fn().mockReturnValue({
        onSubmit: vi.fn(),
        serverError: null,
        clearServerError: vi.fn(),
    }),
}))

describe('Registration', () => {
    // 1. Тестирование рендеринга формы регистрации
    it('should render the registration form', () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Registration />
                </MemoryRouter>
            </Provider>
        )

        // Проверяем наличие полей
        expect(
            screen.getByPlaceholderText('Введите логин...')
        ).toBeInTheDocument()
        expect(
            screen.getByPlaceholderText('Введите пароль...')
        ).toBeInTheDocument()
        expect(
            screen.getByPlaceholderText('Повторите пароль...')
        ).toBeInTheDocument()
        expect(screen.getByText('Зарегистрироваться')).toBeInTheDocument()
    })

    // 2. Тестирование ошибки при неправильном вводе
    it('should show error message when passwords do not match', async () => {
        vi.mock('@hooks', () => ({
            useAuthSubmit: vi.fn().mockReturnValue({
                onSubmit: vi.fn(),
                serverError: 'Пароли не совпадают',
                clearServerError: vi.fn(),
            }),
        }))

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Registration />
                </MemoryRouter>
            </Provider>
        )

        // Заполняем поля
        fireEvent.change(screen.getByPlaceholderText('Введите логин...'), {
            target: { value: 'ivan' },
        })
        fireEvent.change(screen.getByPlaceholderText('Введите пароль...'), {
            target: { value: 'qwe123' },
        })
        fireEvent.change(screen.getByPlaceholderText('Повторите пароль...'), {
            target: { value: 'qwe124' }, // Неверный пароль
        })

        // Кликаем по кнопке
        fireEvent.click(screen.getByText('Зарегистрироваться'))

        // Проверяем, что сообщение об ошибке появилось
        await waitFor(() => {
            expect(screen.getByText('Пароли не совпадают')).toBeInTheDocument()
        })
    })

    // 3. Тестирование успешной регистрации
    it('should navigate to the main page after successful registration', async () => {
        vi.mock('@hooks', () => ({
            useAuthSubmit: vi.fn().mockReturnValue({
                onSubmit: vi.fn(),
                serverError: null,
                clearServerError: vi.fn(),
            }),
        }))

        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={[ROUTES.REGISTER]}>
                    <Registration />
                </MemoryRouter>
            </Provider>
        )

        // Заполняем форму
        fireEvent.change(screen.getByPlaceholderText('Введите логин...'), {
            target: { value: 'denis' },
        })
        fireEvent.change(screen.getByPlaceholderText('Введите пароль...'), {
            target: { value: 'qwe123' },
        })
        fireEvent.change(screen.getByPlaceholderText('Повторите пароль...'), {
            target: { value: 'qwe123' },
        })

        // Кликаем по кнопке регистрации
        fireEvent.click(screen.getByText('Зарегистрироваться'))

        // Ожидаем редирект
        await waitFor(() => {
            expect(window.location.pathname).toBe(ROUTES.MAIN_PAGE)
        })
    })
})