import { Icon } from '@components';

type Search = {
    value: string;
    handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Search: React.FC<Search> = ({ value, handleChangeInput }) => {
    return (
        <div className="mx-auto max-w-[1536px] relative">
            <input
                value={value}
                onChange={handleChangeInput}
                type="text"
                placeholder="Найдите книгу..."
                className="w-full pl-9 p-2 bg-white mb-[15px] border-1 border-[#d1d5dc] rounded-full"
            />
            <Icon
                className={
                    'bi-search absolute left-0 top-1 flex items-center text-gray-400 border-0 pl-3 pt-2'
                }
            />
        </div>
    )
};
