import { Input } from "../ui/input";


interface SearchbarProps {
    onSearch: (searchTerm: string) => void;
}

const Searchbar = ({ onSearch }: SearchbarProps) => {
    return (
        <div className="mb-4 md:w-3/4">
            <h3 className="font-bold text-lg mb-2">
                Search News
            </h3>
            <Input 
                type="text" 
                placeholder="Search news...." 
                className="w-full rounded-md p-2 border border-gray-200"
                onChange={(e) => onSearch(e.target.value)}
            />
        </div>
    )
};

export default Searchbar;
