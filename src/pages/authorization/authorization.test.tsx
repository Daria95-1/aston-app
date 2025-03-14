import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { Authorization } from '@pages'
import { vi } from 'vitest'
import { useAuthSubmit } from '@hooks'
import { ROUTES } from '@constants'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../../store'

vi.mock('@hooks', () => ({
    useAuthSubmit: vi.fn().mockReturnValue({
        onSubmit: vi.fn(),
        serverError: null,
        clearServerError: vi.fn(),
    }),
}))

describe('Authorization', () => {
    it('should render the login form', () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Authorization />
                </MemoryRouter>
            </Provider>
        )

        expect(
            screen.getByPlaceholderText('Введите логин...')
        ).toBeInTheDocument()
        expect(
            screen.getByPlaceholderText('Введите пароль...')
        ).toBeInTheDocument()
        expect(screen.getByText('Войти')).toBeInTheDocument()
    })

    it('should show error message when login is incorrect', async () => {
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

        fireEvent.change(screen.getByPlaceholderText('Введите логин...'), {
            target: { value: 'incorrectUser' },
        })
        fireEvent.change(screen.getByPlaceholderText('Введите пароль...'), {
            target: { value: 'wrongPassword' },
        })

        fireEvent.click(screen.getByText('Войти'))

        await waitFor(() => {
            expect(
                screen.getByText('Ошибка запроса: Неверные данные')
            ).toBeInTheDocument()
        })
    })

    it('should navigate to main page when authorized', async () => {
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

        fireEvent.change(screen.getByPlaceholderText('Введите логин...'), {
            target: { value: 'ivan' },
        })
        fireEvent.change(screen.getByPlaceholderText('Введите пароль...'), {
            target: { value: 'qwe123' },
        })

        fireEvent.click(screen.getByText('Войти'))

        await waitFor(() => {
            expect(window.location.pathname).toBe(ROUTES.MAIN_PAGE)
        })
    })
})