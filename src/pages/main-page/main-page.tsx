import "./main-page.css";
import { Pagination } from "@mui/material";
import { Search, Filters, RecentlyViewed, BookCardList } from "@components";
import { recentlyViewed } from "../../mock";
import { useAppDispatch, useAppSelector } from "@hooks/hooks";
import { selectNumberOfPages, changePage, fetchBooks, selectPage } from "../../slices/books-slice";
import { useEffect } from "react";

const MainPage: React.FC = () => {
    const numberPages = useAppSelector(selectNumberOfPages);
    const currentPage = useAppSelector(selectPage);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchBooks({ page: currentPage, request: "the+lord+of+the+rings" }));
    }, [dispatch, currentPage]);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(changePage(value));
    };

    return (
        <div className="min-h-screen flex flex-col">
            <main className="p-4 flex-1">
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
            </main>
        </div>
    )
};

export { MainPage };
