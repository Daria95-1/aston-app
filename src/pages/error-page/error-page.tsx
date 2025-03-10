import { AdditionalContent } from '@components'
import { ROUTES } from '@constants'
import { Link } from 'react-router-dom'

export const ErrorPage = () => {
    return (
        <AdditionalContent
            title="Упс, что-то пошло не так..."
            description={
                <>
                    Вернуться на{' '}
                    <Link
                        to={ROUTES.MAIN_PAGE}
                        className="text-[#2B8AFF] hover:underline"
                    >
                        главную страницу
                    </Link>
                </>
            }
            image="/src/image/404.svg"
         />
    )
}
