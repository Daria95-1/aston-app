//import "./main-page.css";
import { Search, Filters, RecentlyViewed, BookCardList } from "@components";

export const MainPage: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <main className="p-4 flex-1">
                <Search />
                <Filters />
                <BookCardList />
                <RecentlyViewed  />
            </main>
        </div>
    );
};


