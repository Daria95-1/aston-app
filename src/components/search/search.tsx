type Search = {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
};

export const Search: React.FC<Search> = ({ value, setValue }) => {
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    console.log(value);

    return (
        <div className="mx-auto max-w-[1536px]">
            <input
                value={value}
                onChange={(event) => handleChange(event)}
                type="text"
                placeholder="Найдите книгу..."
                className="w-full p-2 border rounded"
            />
        </div>
    );
};
