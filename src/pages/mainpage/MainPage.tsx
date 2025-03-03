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
