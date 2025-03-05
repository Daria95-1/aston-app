import { AdditionalContent } from '@components'
import { Link } from 'react-router-dom'
import { ROUTES } from '@constants'

export const EmptyFavorites = () => {
     return (
         <AdditionalContent
             title="У вас пока нет избранных"
             description={
                 <>
                     Перейдите на{' '}
                     <Link
                         to={ROUTES.MAIN_PAGE}
                         className="text-[#2B8AFF] hover:underline"
                     >
                         главную страницу
                     </Link>
                     , чтобы найти интересные товары
                 </>
             }
             image="/src/image/empty-favorites.svg"
         />
     )
}