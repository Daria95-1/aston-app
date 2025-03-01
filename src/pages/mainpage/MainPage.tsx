import "./MainPage.css";
import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
import { Filters } from "../../components/Filters";
import { BookCard } from "../../components/BookCard";
import { RecentlyViewed } from "../../components/RecentlyViewed";
import { Footer } from "../../components/Footer";
import { recentlyViewed } from "../../mock";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { useEffect } from "react";
import { fetchBooks, selectAllBooks } from "@slices/books-slice";

const Mainpage: React.FC = () => {
    const dispatch = useAppDispatch();
    const booksList = useAppSelector(selectAllBooks);

    useEffect(() => {
        dispatch(fetchBooks());
    }, [dispatch]);

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="p-4 flex-1">
                <Search />
                <Filters />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 my-4 w-full max-w-full">
                    {booksList.map((book) => (
                        <BookCard {...book} key={book.key} />
                    ))}
                </div>
                <RecentlyViewed books={recentlyViewed} />
            </main>
            <Footer />
        </div>
    );
};

export { Mainpage };
