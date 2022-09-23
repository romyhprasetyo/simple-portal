import PostInfo from "@/components/PostInfo";
export default function FeaturedPost(){
    return(
        <article>
            <div className="container mx-auto">
                <div className="flex -mx-6 flex-wrap">
                    <div className="px-6 lg:w-8/12 md:w-7/12 w-full">
                        <img src="/featured-thumbnail.png" className="rounded-2xl w-full h-full object-cover" alt=""/>
                    </div>
                    <div className="lg:w-4/12 md:w-5/12 px-6">
                        <PostInfo
                            category="UI Design"
                            date="July 22, 2022"
                            title="Understanding colors in design"
                            shortDescription="Ad atque autem dignissimos, dolor et nemo non nulla perspiciatis porro quae quia quisquam reiciendis sequi tempora temporibus unde vel velit voluptatum!"
                            authorName="Lesley Brook"
                            authorJob="UI Designer"
                            authorAvatar="/author-1.png"
                        />
                    </div>
                </div>
            </div>
        </article>
    )
}