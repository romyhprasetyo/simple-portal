import Link from 'next/link';

interface PostMetaTitleProps {
    category:string,
    date:string,
    title:string,
    center:boolean
}
export default function PostMetaTitle({category, title, date, center} : PostMetaTitleProps){
    return(
        <>
            <div className="flex items-center space-x-4 mt-4">
                <div className="uppercase text-white/60">{category}</div>
                <span>&bull;</span>
                <div>
                    {date}
                </div>
            </div>
            <h2 className={`text-lg mt-4 ${center ? 'text-center' : ''}`}>
                <Link href="/detail"><a>{title}</a></Link>
            </h2>
        </>
    );
}