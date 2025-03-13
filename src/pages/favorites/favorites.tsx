import { EmptyFavorites } from '@pages'
import { useEffect, useState } from 'react'
import { BookCard } from '@components'
import {
    selectUserFavorites,
    selectUserRole,
    deleteFromFavorites,
} from '@slices/user-slice'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch } from '../../store'
import { useNavigate } from 'react-router-dom'
import { ROUTES, ROLE } from '@constants'

export const Favorites = () => {
    const navigate = useNavigate()
    const roleId = useSelector(selectUserRole)
    const favorites = useSelector(selectUserFavorites)
    const dispatch = useDispatch<AppDispatch>()
    const [isCheckingAuth, setIsCheckingAuth] = useState(true)

    useEffect(() => {
        if (roleId === ROLE.GUEST) {
            navigate(ROUTES.LOGIN)
        } else {
            setIsCheckingAuth(false)
        }
    }, [roleId, navigate])

    const handleDeleteFavoriteClick = (bookId: string): void => {
        dispatch(deleteFromFavorites(bookId))
    }

    const getFavoriteClickHandler = (bookId: string) => () => {
        handleDeleteFavoriteClick(bookId)
    }

    // Пока не проверили роль — ничего не рендерим
    if (isCheckingAuth) {
        return null
    }

    if (favorites.length === 0) {
        return <EmptyFavorites />
    }

    return (
        <div className="mx-auto max-w-[1536px]">
            <h2 className="text-xl font-bold mb-2 ml-0">Избранное</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-4">
                {favorites.map((favorite) => (
                    <BookCard
                        key={favorite.key}
                        bookId={favorite.key}
                        cover_edition_key={favorite.cover_edition_key}
                        title={favorite.title}
                        author_name={favorite.author_name}
                        isFavorite={true}
                        onFavoriteClick={getFavoriteClickHandler(favorite.key)}
                    />
                ))}
            </div>
        </div>
    )
}
