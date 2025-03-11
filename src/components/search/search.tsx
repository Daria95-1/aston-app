type Search = {
    value: string;
    handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Search: React.FC<Search> = ({ value, handleChangeInput }) => {
    return (
        <div className="mx-auto max-w-[1536px]">
            <input
                value={value}
                onChange={handleChangeInput}
                type="text"
                placeholder="Найдите книгу..."
                className="w-full p-2 border rounded"
            />
        </div>
    );
};
