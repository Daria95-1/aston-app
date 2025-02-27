import { useSelector } from 'react-redux'
import { ROLE } from '@constants'
import { IconButton } from '@components'
import { selectUserRole } from '@slices'
import { GuestContent, UserContent } from '../../components'

export const ControlPanel = () => {
    const roleId = useSelector(selectUserRole)

    const displayContent = roleId === ROLE.GUEST ? <GuestContent /> : <UserContent />

    return (
        <div className="flex gap-[40px]">
            <IconButton
                icon="bi-heart-fill"
                className={'cursor-pointer'}
                text="Избранное"
            />
            {displayContent}
        </div>
    )
}
