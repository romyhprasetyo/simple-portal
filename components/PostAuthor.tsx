interface PostAuthorProps{
    authorAvatar: string,
    authorName: string,
    authorJob: string
}
export default function PostAuthor({authorAvatar, authorName, authorJob} : PostAuthorProps){
    return(
        <div className="flex items-center space-x-4 mt-4">
            <img src={authorAvatar} className="w-14 h-14 rounded-full object-cover" alt=""/>
            <div className="ml-4">
                <h3>{authorName}</h3>
                <div className="text-white/60 text-sm">
                    {authorJob}
                </div>
            </div>
        </div>
    );
}