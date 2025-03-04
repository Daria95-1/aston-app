import "./main-page.css";
import { Search, Filters, RecentlyViewed, BookCardList } from "@components";
import { recentlyViewed } from "../../mock";

const MainPage: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <main className="p-4 flex-1">
                <Search />
                <Filters />
                <BookCardList />
                <RecentlyViewed books={recentlyViewed} />
            </main>
        </div>
    );
};

export { MainPage };
