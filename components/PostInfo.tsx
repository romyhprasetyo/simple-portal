import PostMetaTitle from "@/components/PostMetaTitle";
import PostAuthor from "@/components/PostAuthor";

interface FeaturedPostProps {
    category:string,
    date:string,
    title:string,
    shortDescription:string,
    authorAvatar:string,
    authorName:string,
    authorJob:string
}

export default function PostInfo(
    {category, date, title, shortDescription, authorName, authorAvatar, authorJob} : FeaturedPostProps){
    return(
        <>
            <PostMetaTitle
                category={category}
                title={title}
                date={date}
                center
            />
            <p className="text-white/60 mt-4 w-10/12">
                {shortDescription}
            </p>
            <PostAuthor
                authorAvatar={authorAvatar}
                authorName={authorName}
                authorJob={authorJob}/>
        </>
    );
}