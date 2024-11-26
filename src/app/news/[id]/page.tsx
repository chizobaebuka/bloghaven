import { NewsItem } from "@/types/news";
import Image from "next/image";

// Revalidate every 60 seconds
export const revalidate = 60;
export const dynamicParams = true; // to 404 on unknown paths

// Generate static params for dynamic routes
export async function generateStaticParams() {
    const news: NewsItem[] = await fetch(`https://news-api-next-js-kappa.vercel.app/api/news`).then((res) =>
        res.json()
    );

    return news.map((item) => ({
        id: String(item?._id),
    }));
}

interface PageProps {
    params: Promise<{ id: string }>;
}

const NewsDetailsPage = async ({ params }: PageProps) => {
    const { id } = await params;

    // Fetch the news item based on the dynamic id
    const news: NewsItem = await fetch(
        `https://news-api-next-js-kappa.vercel.app/api/news/${id}`
    ).then((res) => res.json());

    if (!news) {
        return (
            <div>
                <h1>News not found</h1>
            </div>
        );
    }

    return (
        <section className="py-12">
            <article className="max-w-4xl mx-auto p-6 shadow-md border rounded-lg">
                {news?.imageUrl && (
                    <div>
                        <Image
                            src={news?.imageUrl}
                            alt={news?.title}
                            width={800}
                            height={450}
                            className="rounded-md object-cover"
                        />
                    </div>
                )}

                <div className="my-3">
                    <h2 className="text-3xl font-bold mb-2">{news?.title}</h2>

                    <div className="flex justify-between items-center text-sm mb-4">
                        <p>{new Date(news?.published_at).toLocaleDateString()}</p>
                        <p>
                            Source: <span>{news?.source}</span>
                        </p>
                    </div>
                </div>

                <div className="mb-4">
                    {news?.categories?.map((category: string) => (
                        <span
                            key={category}
                            className="bg-blue-100 text-blue-600 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
                        >
                            {category}
                        </span>
                    ))}
                </div>

                {/* Snippet */}
                <p className="mb-2">{news?.snippet}</p>

                {/* Full Description */}
                <p className="mb-4">{news?.description}</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolorum neque quam recusandae asperiores
                    sint, consequuntur rem eius fuga deleniti tempore totam enim eum impedit quia dicta vero velit qui! Vel modi
                    expedita, delectus totam dolores, esse illo at ex fugiat illum iure dolorem repellat?
                </p>
            </article>
        </section>
    );
};

export default NewsDetailsPage;
