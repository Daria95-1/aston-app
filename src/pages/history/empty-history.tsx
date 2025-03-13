import { AdditionalContent } from '@components'
import { Link } from 'react-router-dom'
import { ROUTES } from '@constants'

export const EmptyHistory = () => {
     return (
         <AdditionalContent
             title="У вас пока нет просмотренных книг"
             description={
                 <>
                     Перейдите на{' '}
                     <Link
                         to={ROUTES.MAIN_PAGE}
                         className="text-[#2B8AFF] hover:underline"
                     >
                         главную страницу
                     </Link>
                     , чтобы посмотреть книжки
                 </>
             }
             image="/src/image/noitemsimage.png"
         />
     )
}