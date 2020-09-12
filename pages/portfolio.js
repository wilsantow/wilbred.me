import Projectcard from "../components/Projectcard";
import { ProjectList } from "../BlogData/ProjectList";
import Layout from "../components/Layout";
import Head from "next/head";

export default function portfolio() {
  function formatPath(p) {
    return "/" + p.replace(/\.mdx$/, "");
  }
  return (
    <Layout>
      <Head>
        <title>  Portfolio - Wilbred Anto</title>
        <meta name="description" content="Software Engineering portfolio containing the list of projects I have done using various frameworks and technologies."/>
      </Head>
      {/* <h1 className="text-xl text-center ">Projects</h1> */}
      <div className="container  mt-4 flex flex-wrap justify-around mx-auto">
        {ProjectList.map((project) => {
          return (
            <Projectcard
              title={project.title}
              image={project.image}
              description={project.description}
              website={project.website}
              path={formatPath(project.__resourcePath)}
            />
          );
        })}
      </div>
    </Layout>
  );
}
