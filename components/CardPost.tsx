import Link from "next/link";
import PostInfo from "@/components/PostInfo";

// @ts-ignore
export default function CardPost({thumbnail, ...postInfo}){
    return(
        <article>
            <Link href="/detail">
                <a>
                    <img src={thumbnail} className="rounded w-full" alt=""/>
                </a>
            </Link>
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