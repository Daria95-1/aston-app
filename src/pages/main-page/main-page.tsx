import { useEffect, useState } from "react";
import { Search, Filters, RecentlyViewed, BookCardList } from "@components";
import { Pagination } from "@mui/material";
import { recentlyViewed } from "../../mock";
import { useAppDispatch, useAppSelector } from "@hooks/hooks";
import { selectNumberOfPages, changePage, resetPage, fetchBooks, selectPage } from "../../slices/books-slice";

export const MainPage: React.FC = () => {
    const numberPages = useAppSelector(selectNumberOfPages);
    const currentPage = useAppSelector(selectPage);
    const [value, setValue] = useState<string>("");
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(
            fetchBooks({
                page: currentPage,
                request: value || "the+lord+of+the+rings",
            })
        );
    }, [dispatch, currentPage, value]);

    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(changePage(value));
    };

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        dispatch(resetPage());
    };

    return (
        <div className="min-h-screen flex flex-col">
            <div className="p-4 flex-1">
                <Search handleChangeInput={handleChangeInput} />
                <Filters />
                <BookCardList />
                <Pagination
                    className=" flex justify-center mt-10 pagination"
                    count={numberPages}
                    page={currentPage}
                    onChange={handleChangePage}
                    sx={{
                        "& .Mui-selected": {
                            backgroundColor: "#2B8AFF !important",
                            color: "white !important",
                        },
                        "& .MuiPaginationItem-root:hover": {
                            backgroundColor: "#155dfc",
                            color: "white",
                        },
                    }}
                    size="large"
                />
                <RecentlyViewed books={recentlyViewed} />
            </div>
        </div>
    );
};
