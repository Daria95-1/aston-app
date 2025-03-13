import { useEffect, useState } from "react";
<<<<<<< HEAD
import { Search, Filters, RecentlyViewed, BookCardList } from '@components'
import { Pagination } from "@mui/material";
import { recentlyViewed } from "../../mock";
=======
import { Pagination } from "@mui/material";
import { Search, Filters, RecentlyViewed, BookCardList } from "@components";
>>>>>>> 890f4c0a70b8b493b19d750ab46fb7f74efde46e
import { useAppDispatch, useAppSelector } from "@hooks/hooks";
import {
    selectNumberOfPages,
    changePage,
    fetchBooks,
    selectPage,
    isBooksLoadingSelector,
} from '../../slices/books-slice'
import {
    selectUserFavorites,
    setFavorites,
} from '@slices/user-slice'
import { STORAGE_KEYS } from '@constants'

export const MainPage: React.FC = () => {
    const numberPages = useAppSelector(selectNumberOfPages)
    const currentPage = useAppSelector(selectPage)
<<<<<<< HEAD
    const isLoading = useAppSelector(isBooksLoadingSelector)
    const [value, setValue] = useState<string>('')
=======
    const isLoading = useAppSelector(isBooksLoadingSelector);
    const [value, setValue] = useState<string>("");
>>>>>>> 890f4c0a70b8b493b19d750ab46fb7f74efde46e
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
            fetchBooks({
                page: currentPage,
                request: value || 'the+lord+of+the+rings',
            })
        )
    }, [dispatch, currentPage, value])

    const handleChangePage = (
        event: React.ChangeEvent<unknown>,
        value: number
    ) => {
        dispatch(changePage(value))
    }

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return (
        <div className="min-h-screen flex flex-col">
            <div className="p-4 flex-1">
                <Search handleChangeInput={handleChangeInput} />
                <Filters />
                <BookCardList />
<<<<<<< HEAD
                {!isLoading && (
                    <Pagination
                        className="pagination"
                        count={numberPages}
                        page={currentPage}
                        onChange={handleChangePage}
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
                )}
                <RecentlyViewed books={recentlyViewed} />
=======
              {!isLoading && (
                <Pagination
                    className="pagination"
                    count={numberPages}
                    page={currentPage}
                    onChange={handleChangePage}
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
               )}

                <RecentlyViewed  />
>>>>>>> 890f4c0a70b8b493b19d750ab46fb7f74efde46e
            </div>
        </div>
    )
};


