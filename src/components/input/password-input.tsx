/** @format */

import { Input, Icon } from '@components'
import { getInputType } from '@utils'

interface PasswordInputProps {
    register: (
        name: string,
        options?: Record<string, unknown>
    ) => {
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
        ref: React.RefObject<HTMLInputElement>
    }
    name: string
    placeholder: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    showPassword: boolean
    setShowPassword: React.Dispatch<React.SetStateAction<boolean>>
}

export const PasswordInput = ({
    register,
    name,
    placeholder,
    onChange,
    showPassword,
    setShowPassword,
}: PasswordInputProps) => {
    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev)
    }

    return (
        <div className="relative w-full">
            <Input
                type={getInputType(showPassword)}
                placeholder={placeholder}
                {...register(name, { onChange })}
            />
            <div
                className="absolute right-0 top-1 flex items-center text-gray-400 border-0 pr-2 pt-2"
                onClick={togglePasswordVisibility}
            >
                <Icon className={showPassword ? 'bi-eye' : 'bi-eye-slash'} />
            </div>
        </div>
    )
}
