import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { Authorization } from '@pages'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { selectUserRole } from '@slices/user-slice'
import { ROLE } from '@constants'
import { useAuthSubmit } from '@hooks'
import { MemoryRouter } from 'react-router-dom'
import { vi } from 'vitest'

// Моки для хуков и селекторов
// Заменили jest.mock на vi.mock для Vitest.
vi.mock('@hooks', () => ({
    useAuthSubmit: vi.fn(),
}))

vi.mock('@slices/user-slice', () => ({
    selectUserRole: vi.fn(),
}))

// Здесь мы создаем моковый Redux store, чтобы не зависеть от реального состояния в тестах.
const mockStore = configureStore({
    reducer: {
        user: (state = { role: ROLE.GUEST }) => state,
    },
})

describe('Authorization Component', () => {
    it('should render the authorization form', () => {
        render(
            <Provider store={mockStore}>
                <MemoryRouter>
                    <Authorization />
                </MemoryRouter>
            </Provider>
        )

        expect(screen.getByText('Вход')).toBeInTheDocument()
        expect(
            screen.getByPlaceholderText('Введите логин...')
        ).toBeInTheDocument()
        expect(
            screen.getByPlaceholderText('Введите пароль...')
        ).toBeInTheDocument()
    })

    it('should submit the form with valid data', async () => {
        const mockOnSubmit = vi.fn()

        vi.mocked(useAuthSubmit).mockReturnValue({
            onSubmit: mockOnSubmit,
            serverError: null,
            clearServerError: vi.fn(),
        })

        render(
            <Provider store={mockStore}>
                <MemoryRouter>
                    <Authorization />
                </MemoryRouter>
            </Provider>
        )

        fireEvent.change(screen.getByPlaceholderText('Введите логин...'), {
            target: { value: 'testuser' },
        })
        fireEvent.change(screen.getByPlaceholderText('Введите пароль...'), {
            target: { value: 'password123' },
        })

        fireEvent.click(screen.getByRole('button', { name: /Войти/i }))

        await waitFor(() => {
            expect(mockOnSubmit).toHaveBeenCalledWith(
                { login: 'testuser', password: 'password123' },
                expect.any(Function)
            )
        })
    })

    it('should show an error message when login fails', async () => {
        const mockOnSubmit = vi.fn(() => {
            throw new Error('Ошибка запроса')
        })

        vi.mocked(useAuthSubmit).mockReturnValue({
            onSubmit: mockOnSubmit,
            serverError: 'Ошибка запроса',
            clearServerError: vi.fn(),
        })

        render(
            <Provider store={mockStore}>
                <MemoryRouter>
                    <Authorization />
                </MemoryRouter>
            </Provider>
        )

        fireEvent.change(screen.getByPlaceholderText('Введите логин...'), {
            target: { value: 'testuser' },
        })
        fireEvent.change(screen.getByPlaceholderText('Введите пароль...'), {
            target: { value: 'password123' },
        })

        fireEvent.click(screen.getByRole('button', { name: /Войти/i }))

        await waitFor(() => {
            expect(screen.getByText('Ошибка запроса')).toBeInTheDocument()
        })
    })

    it('should redirect to main page if user is authenticated', () => {
        vi.mocked(selectUserRole).mockReturnValue(ROLE.USER)

        const { container } = render(
            <Provider store={mockStore}>
                <MemoryRouter>
                    <Authorization />
                </MemoryRouter>
            </Provider>
        )

        expect(container).toBeEmptyDOMElement()
    })
})
