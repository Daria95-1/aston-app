import { forwardRef } from 'react'
import { FormButton } from '@components'
import { Icon } from '../icon/icon'

export const Input = forwardRef(({ showIcon, ...props }, ref) => {
    return (
        <div className="relative w-full">
            <input
                className="text-[14px] w-full h-[45px] pl-[10px] text-base bg-[#F4F4F4] mb-[15px] border-0 rounded-[4px]"
                {...props}
                ref={ref}
            />
            {showIcon && (
                <FormButton
                    type="button"
                    className="absolute right-[0] top-1/2 transform -translate-y-1/2 text-gray-400 border-0"
                >
                    <Icon className={'bi-eye-slash mb-[12px]'} />
                </FormButton>
            )}
        </div>
    )
})

