import "./main-page.css";
import { Pagination } from "@mui/material";
import { Search, Filters, RecentlyViewed, BookCardList } from "@components";
import { recentlyViewed } from "../../mock";
import { useAppDispatch, useAppSelector } from "@hooks/hooks";
import {
    selectNumberOfPages,
    changePage,
    fetchBooks,
    selectPage,
    isBooksLoadingSelector,
} from "../../slices/books-slice";
import { useEffect, useState } from "react";

const MainPage: React.FC = () => {
    const numberPages = useAppSelector(selectNumberOfPages);
    const currentPage = useAppSelector(selectPage);
    const isLoading = useAppSelector(isBooksLoadingSelector);
    const [value, setValue] = useState<string>("");
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchBooks({ page: currentPage, request: value || "the+lord+of+the+rings" }));
    }, [dispatch, currentPage, value]);

    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(changePage(value));
    };

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <div className="min-h-screen flex flex-col">
            <main className="p-4 flex-1">
                <Search value={value} handleChangeInput={handleChangeInput} />
                <Filters />
                <BookCardList />
                {!isLoading && (
                    <Pagination
                        className="pagination"
                        count={numberPages}
                        page={currentPage}
                        onChange={handleChangePage}
                        color="primary"
                        size="large"
                    />
                )}

                <RecentlyViewed books={recentlyViewed} />
            </main>
        </div>
    );
};

export { MainPage };
