import { Input, Icon } from '@components'
import { getInputType } from '@utils'

export const PasswordInput = ({
    register,
    name,
    placeholder,
    onChange,
    showPassword,
    setShowPassword,
}) => {
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
                type="button"
                className="absolute right-0 top-1 flex items-center text-gray-400 border-0 pr-2 pt-2"
                onClick={togglePasswordVisibility}
            >
                <Icon className={showPassword ? 'bi-eye' : 'bi-eye-slash'} />
            </div>
        </div>
    )
}

