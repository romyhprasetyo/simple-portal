interface sectionHeaderProps {
    pageTitle : String
}
export default function SectionHeader({pageTitle} : sectionHeaderProps){
    return(
        <div className="text-center">
            <h1 className="text-4xl py-2 text-2xl">{pageTitle}</h1>
        </div>
    );
}