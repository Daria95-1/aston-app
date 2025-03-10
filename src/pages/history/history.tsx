import { EmptyHistory } from '@pages'
import { BookCard } from '@components'
import {  selectUserHistory } from '@slices/user-slice'
import { useSelector} from 'react-redux'


export const History = () => {
    const history = useSelector(selectUserHistory)
    if (history.length === 0) {
        return <EmptyHistory />
    }

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 md:grid-cols-5 gap-4 my-4 mx-auto max-w-[1536px]">
                {history.map((oneOfHistory) => (
                    <BookCard
                        key={oneOfHistory.key}
                        bookId={oneOfHistory.key}
                        cover_edition_key={oneOfHistory.cover_edition_key}
                        title={oneOfHistory.title}
                        author_name={oneOfHistory.author_name}
                    />
                ))}
            </div>
        </div>
    )
}
