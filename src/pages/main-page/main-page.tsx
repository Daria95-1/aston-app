import { useEffect } from "react";
import { Pagination } from "@mui/material";
import { Search, Filters, RecentlyViewed, BookCardList } from "@components";
import { recentlyViewed } from "../../mock";
import { useAppDispatch, useAppSelector } from "@hooks/hooks";
import { selectNumberOfPages, changePage, fetchBooks, selectPage } from "../../slices/books-slice";
import {
    selectUserFavorites,
    setFavorites,
} from '@slices/user-slice'
import { STORAGE_KEYS } from '@constants'
import "./main-page.css";

const MainPage: React.FC = () => {
    const numberPages = useAppSelector(selectNumberOfPages)
    const currentPage = useAppSelector(selectPage)
    const dispatch = useAppDispatch()
    const favorites = useAppSelector(selectUserFavorites)

    // Загрузка избранных книг при монтировании компонента
    useEffect(() => {
        const savedFavorites = sessionStorage.getItem(
            STORAGE_KEYS.FAVOTITES_DATA
        )
        if (savedFavorites) {
            dispatch(setFavorites(JSON.parse(savedFavorites)))
        }
    }, [dispatch])

    // Сохраняем избранные книги в sessionStorage, когда favorites изменяются
    useEffect(() => {
        if (favorites.length > 0) {
            sessionStorage.setItem(
                STORAGE_KEYS.FAVOTITES_DATA,
                JSON.stringify(favorites)
            )
        }
    }, [favorites])

    useEffect(() => {
        dispatch(
            fetchBooks({ page: currentPage, request: 'the+lord+of+the+rings' })
        )
    }, [dispatch, currentPage])

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(changePage(value))
    }

    return (
        <div className="min-h-screen flex flex-col">
            <div className="p-4 flex-1">
                <Search />
                <Filters />
                <BookCardList />
                <Pagination
                    className="pagination"
                    count={numberPages}
                    page={currentPage}
                    onChange={handleChange}
                    sx={{
                        '& .Mui-selected': {
                            backgroundColor: '#2B8AFF !important',
                            color: 'white !important',
                        },
                        '& .MuiPaginationItem-root:hover': {
                            backgroundColor: '#155dfc',
                            color: 'white',
                        },
                    }}
                    size="large"
                />

                <RecentlyViewed books={recentlyViewed} />
            </div>
        </div>
    )
};

export { MainPage };
