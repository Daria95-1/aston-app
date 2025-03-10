import { Input } from '@components'

type TextInputProps = {
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
}

export const TextInput = ({
    register,
    name,
    placeholder,
    onChange,
}: TextInputProps) => {
    return (
        <Input
            type="text"
            placeholder={placeholder}
            {...register(name, { onChange })}
        />
    )
}
