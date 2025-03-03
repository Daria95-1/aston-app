<<<<<<< HEAD
import { BookCard, Filters, RecentlyViewed, Search } from '@components'
import { books, recentlyViewed } from '../../mock';
import './main-page.css'

export const MainPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="p-4 flex-1">
        <div className="mx-auto max-w-[1536px]">
          <Search />
          <Filters />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 my-4 mx-auto max-w-[1536px]">
          {books.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>
        <div className="grid grid-cols-1  gap-4 my-4 mx-auto max-w-[1536px]">
          <RecentlyViewed books={recentlyViewed} />
        </div>
      </main>
    </div>
  );
}


=======
import "./MainPage.css";
import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
import { Filters } from "../../components/Filters";
import { RecentlyViewed } from "../../components/RecentlyViewed";
import { Footer } from "../../components/Footer";
import { recentlyViewed } from "../../mock";
import { BookCardList } from "@components/bookCardList/bookCardList";

const Mainpage: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="p-4 flex-1">
                <Search />
                <Filters />
                <BookCardList />

                <RecentlyViewed books={recentlyViewed} />
            </main>
            <Footer />
        </div>
    );
};

export { Mainpage };
>>>>>>> api-main
