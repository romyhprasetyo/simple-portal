import {useState} from "react";
import Container from "@/components/Container";
import CardPost from "@/components/CardPost";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import mockPosts from "@/utils/posts.json"
import Head from "next/head";

export default function Post(){
    const [posts, setPosts] = useState(mockPosts);
    return(
       <Layout>
           <Head>
               <title>Posts &mdash; Epicestus</title>
           </Head>
           <Container>
               <SectionHeader pageTitle="UI Design"/>
               {!posts.length ? (
                   <div className="text-center py-20">
                       <h2 className="text-6xl">No Result</h2>
                       <p className="text-xl mt-5 text-white/60 md:w-6/12 w-full mx-auto">We couldn't find any posts with the keyword 'Hi'. Please try another keyword.</p>
                   </div>
               ) : (
                   <div className="flex -mx-4 flex-wrap mt-6">
                       {posts.map(post =>(
                           <div key={post.id} className="md:w-4/12 w-full px-4 py-6">
                               <CardPost {...post}/>
                           </div>
                       ))}
                   </div>
               )}
           </Container>
       </Layout>
    );
}