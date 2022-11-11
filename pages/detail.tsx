import Layout from "@/components/Layout";
import Container from "@/components/Container";
import PostMetaTitle from "@/components/PostMetaTitle";
import PostAuthor from "@/components/PostAuthor";
import Head from "next/head";

export default function Detail(){
    return(
        <Layout>
            <Head>
                <title>Home &mdash; Epicestus</title>
            </Head>
            <Container>
                <div className="md:w-8/12 w-full mx-auto flex items-center flex-col">
                    <PostMetaTitle
                        category="UI Design"
                        title="How to design a product that can grow your business"
                        date="July 23, 2022"
                        center={true}
                    />
                    <PostAuthor
                        authorAvatar="/author-2.png"
                        authorName="Leslie Brook"
                        authorJob="UI Designer"
                    />
                </div>
                <div className="md:w-10/12 w-full mx-auto my-10">
                    <img src="/detail-image.png" className="w-full rounded-lg" alt=""/>
                </div>
                <div className="md:w-8/12 w-full mx-auto space-y-3 my-5 leading-relaxed">
                    <p className="lg:text-xl text-md">
                        If you’ve studied or read anything about design, you’re probably familiar with at least one design process framework. Something that describes what the process of designing something should be.
                    </p>
                    <p className="lg:text-xl text-md">
                        Usually you start with understanding the problem. You follow that with the exploration of ideas that could solve said problem. And ultimately this leads to discovering a solution.
                    </p>
                    <p className="lg:text-xl text-md">
                        Once you have a solution, you put it out there and you monitor it, so you can learn and feed another cycle of understanding &gt; exploring &gt; materializing.
                    </p>
                </div>
            </Container>
        </Layout>
    );
}