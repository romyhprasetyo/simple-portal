import {useState} from "react";
import Container from "@/components/Container";

export default function Navbar(){
    const [dropDown, setDropDown] = useState(false);
    const dropDownList = [
        { text : 'Internet', href : '#'},
        { text : 'Books', href: '#'},
        { text : 'Open Source', href: '#' }
    ]

    return(
        <>
            <nav className="py-10">
                <Container>
                    <div className="flex items-center">
                        <div className="w-3/12 flex items-center">
                            <div className="w-10 h-10 bg-gray-500 rounded flex items-center justify-center mr-4 shadow-2xl">E</div>
                            EpicCetus
                        </div>
                        <div className="w-6/12">
                            <ul className="space-x-14 flex items-center">
                                <li>
                                    <a href="#" className="hover:underline">UI Design</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Front End</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Back End</a>
                                </li>
                                <li className="relative">
                                    <a
                                        onClick={()=> setDropDown(!dropDown)}
                                        className="hover:underline cursor-pointer flex items-center">
                                        Others
                                        <svg className="ml-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 6L8 10L12 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </a>
                                    {dropDown && (
                                        <ul className="absolute w-[200px] bg-gray-800 shadow-2xl mt-4">
                                            {dropDownList.map(({text, href})=>
                                                <li key={text} className="border-b border-white/5 last:border-0">
                                                    <a
                                                        href={href} className="flex py-3 px-6 hover:bg-gray-700/60">
                                                        {text}
                                                    </a>
                                                </li>
                                            )}
                                        </ul>
                                    )}
                                </li>
                            </ul>
                        </div>
                        <div className="w-3/12">
                            <input
                                type="text"
                                className="bg-gray-700 py-2 px-6 w-full bg-search rounded-full pl-10"
                                placeholder="Search..."
                            />
                        </div>
                    </div>
                </Container>
            </nav>
        </>
    )
}