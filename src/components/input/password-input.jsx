import { Input, FormButton, Icon } from '@components'
import { getInputType } from '@utils'

export const PasswordInput = ({
    register,
    name,
    placeholder,
    onChange,
    showPassword,
    setShowPassword,
}) => {
    return (
        <div className="relative w-full">
            <Input
                type={getInputType(showPassword)}
                placeholder={placeholder}
                {...register(name, { onChange })}
            />
            <FormButton
                type="button"
                className="absolute right-[0] top-1/2 transform -translate-y-1/2 text-gray-400 border-0 bg-transparent pb-[13px]"
                onClick={() => setShowPassword((prev) => !prev)}
            >
                <Icon className={showPassword ? 'bi-eye' : 'bi-eye-slash'} />
            </FormButton>
        </div>
    )
}

