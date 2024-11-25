import NewsList from "@/components/news/NewsList"

const NewsPage = () => {
    return (
        <section className="py-12">
            <h2 className="text2xl font-medium mb-8">
                Latest News
            </h2>
            <NewsList />
        </section>
    )
}

export default NewsPage