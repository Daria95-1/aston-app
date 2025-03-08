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

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        console.log(event);
        dispatch(changePage(value));
    };

    return (
        <div className="min-h-screen flex flex-col">
            <main className="p-4 flex-1">
                <Search value={value} setValue={setValue} />
                <Filters />
                <BookCardList />
                {!isLoading && (
                    <Pagination
                        className="pagination"
                        count={numberPages}
                        page={currentPage}
                        onChange={handleChange}
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
