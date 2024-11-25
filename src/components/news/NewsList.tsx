"use client"

import { fetchNews } from "@/lib/fetchNews";
import { NewsItem } from "@/types/news"
import { useEffect, useState } from "react"
import Searchbar from "./Searchbar";
import CategoryFilters from "./CategoryFilters";
import NewsCard from "../NewsCard";

const NewsList = () => {
    const [news, setNews] = useState<NewsItem[]>([]);
    const [category, setCategory] = useState<string>("");
    const [searchTerm, setSearchTerm] = useState<string>("");

    useEffect(() => {
        const getNews = async () => {
            const data = await fetchNews(category, searchTerm);
            setNews(data);
        }

        getNews();
    }, [category, searchTerm]);

    return (
        <div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-12 mb-4">
                {/* search bar */}
                <Searchbar onSearch={setSearchTerm} />

                {/* Category filtering */}
                <CategoryFilters onCategoryChange={setCategory} />
            </div>


            {/* present news */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 justify-between">
                {
                    news.map((item: NewsItem) => (
                        <NewsCard key={item._id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default NewsList