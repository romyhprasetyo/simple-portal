import PostInfo from "@/components/PostInfo";

// @ts-ignore
export default function CardPost({thumbnail, ...postInfo}){
    return(
        <article>
            <img src={thumbnail} className="rounded w-full" alt=""/>
            <PostInfo
                category={""}
                date={""}
                title={""}
                shortDescription={""}
                authorAvatar={""}
                authorName={""}
                authorJob={""}
                {...postInfo}
            />
        </article>
    );
}