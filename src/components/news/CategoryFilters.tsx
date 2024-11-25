import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


interface CategoryFiltersProps {
    onCategoryChange: (category: string) => void;
}

const CategoryFilters = ({ onCategoryChange }: CategoryFiltersProps) => {
    const catgeories = ['all', 'tech', 'health', 'sports', 'business'];
    return (
        <div className="flex gap-1 items-center justify-center px-4">
            <h3 className="font-bold text-lg flex-shrink-0">Filter by Category</h3>

            <Select onValueChange={(value) => onCategoryChange(value === 'all' ? '' : value)}>
                <SelectTrigger className="w-[160px] border rounded-md capitalize">
                    <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                    {
                        catgeories.map((category) => (
                            <SelectItem key={category} value={category} className="capitalize">
                                {category}
                            </SelectItem>
                        ))
                    }
                </SelectContent>
            </Select>

        </div>
    )
}

export default CategoryFilters