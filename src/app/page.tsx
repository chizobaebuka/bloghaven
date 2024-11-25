import Banner from "@/components/Banner";
import NewsCard from "@/components/NewsCard";
import NewsLetter from "@/components/NewsLetter";
import { NewsItem } from "@/types/news";

export default async function Home() {
  const response = await fetch("https://news-api-next-js-kappa.vercel.app/api/news");
  const newsData = await response.json();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Banner />

      <div className="my-12">
        <h2 className="text-2x font-bold mb-8">Latest News</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-between gap-4">
          {newsData.slice(0, 3).map((item: NewsItem) => (
            // <div className="" key={item._id}>{item.title}</div>
            <NewsCard key={item._id} item={item} />
          ))}
        </div>
        <NewsLetter />
      </div>
    </div>
  );
}
