type Search = {
    value: string;
    setValue: (set: string) => void;
};

export const Search: React.FC<Search> = ({ value, setValue }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <div className="mx-auto max-w-[1536px]">
            <input
                value={value}
                onChange={handleChange}
                type="text"
                placeholder="Найдите книгу..."
                className="w-full p-2 border rounded"
            />
        </div>
    );
};
