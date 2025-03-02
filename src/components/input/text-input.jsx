import { Input } from '@components'

export const TextInput = ({ register, name, placeholder, onChange }) => {
    return (
        <Input
            type="text"
            placeholder={placeholder}
            {...register(name, { onChange })}
        />
    )
}
