import { useSelector } from 'react-redux'
import { ROLE } from '@constants'
import { selectUserRole } from '@slices/user-slice'
import { GuestContent, UserContent } from '../content'

export const ControlPanel: React.FC = () => {
    const roleId = useSelector(selectUserRole)

    const displayContent =
        roleId === ROLE.GUEST ? <GuestContent /> : <UserContent />

    return <div className="flex gap-[40px]">{displayContent}</div>
}
