import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { Registration } from '@pages'
import { vi } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../../store'
import { ROUTES } from '@constants'

vi.mock('@hooks', () => ({
    useAuthSubmit: vi.fn().mockReturnValue({
        onSubmit: vi.fn(),
        serverError: null,
        clearServerError: vi.fn(),
    }),
}))

describe('Registration', () => {
    it('should render the registration form', () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Registration />
                </MemoryRouter>
            </Provider>
        )

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

        fireEvent.change(screen.getByPlaceholderText('Введите логин...'), {
            target: { value: 'ivan' },
        })
        fireEvent.change(screen.getByPlaceholderText('Введите пароль...'), {
            target: { value: 'qwe123' },
        })
        fireEvent.change(screen.getByPlaceholderText('Повторите пароль...'), {
            target: { value: 'qwe124' },
        })

        fireEvent.click(screen.getByText('Зарегистрироваться'))

        await waitFor(() => {
            expect(screen.getByText('Пароли не совпадают')).toBeInTheDocument()
        })
    })

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

        fireEvent.change(screen.getByPlaceholderText('Введите логин...'), {
            target: { value: 'denis' },
        })
        fireEvent.change(screen.getByPlaceholderText('Введите пароль...'), {
            target: { value: 'qwe123' },
        })
        fireEvent.change(screen.getByPlaceholderText('Повторите пароль...'), {
            target: { value: 'qwe123' },
        })

        fireEvent.click(screen.getByText('Зарегистрироваться'))

        await waitFor(() => {
            expect(window.location.pathname).toBe(ROUTES.MAIN_PAGE)
        })
    })
})