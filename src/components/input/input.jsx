import { forwardRef } from 'react'
import { FormButton } from '@components'
import { Icon } from '../icon/icon'

export const Input = forwardRef(({ ...props }, ref) => {
    return (
        <div className="relative w-full">
            <input
                className="text-[14px] w-full h-[45px] pl-[10px] text-base bg-[#F4F4F4] mb-[15px] border-0 rounded-[4px]"
                {...props}
                ref={ref}
            />
        </div>
    )
})

