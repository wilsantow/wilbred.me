import Blogcard from "../components/Blogcard";
// import { BlogList } from "../BlogData/BlogList";
import Layout from "../components/Layout";
import Head from "next/head";

export default function blog() {
  function formatPath(p) {
    return "/" + p.replace(/\.mdx$/, "");
  }
  return (
    <Layout>
       <Head>
        <title>  Blog - Wilbred Anto</title>
        <meta name="description" content="Writings on Tech, Software, and occasionally on other kinds of stuff."/>
      </Head>
    
      {/* {BlogList.map((Blog) => {
        return (
          <Blogcard
            title={Blog.title}
            description={Blog.description}
            date={Blog.date}
            path={formatPath(Blog.__resourcePath)}
          />
        );
      })} */}
      <p className="text-lg font-bold text-center">Just one more day to publish my first blog!</p>
    </Layout>
  );
}
