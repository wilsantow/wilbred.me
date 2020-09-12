import Layout from "../components/Layout";
import Head from "next/head";
import Link from "next/link";
export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Wilbred Anto | Software Engineer </title>
        <meta
          name="description"
          content="Software Engineering student based in Tamil Nadu, India. Portfolio containing my works and Blogs. Currently in the final year of my undergraduate degree."
        />
      </Head>
      <div className=" text-center ">
        <section className=" p-1 inline-block b mx-auto text-lg  text-left sm:text-xl">
          <h1 className="text-3xl sm:text-5xl">
            Hello,I'm
            <br className="sm:hidden" />
            <span className="font-bold"> Wilbred Anto</span>.
          </h1>
          <h1 className="mt-2 tracking-tight leading-snug text-gray-800 text-lg sm:text-2xl">
            I am a Software Engineering Undergraduate Student based in India.
          </h1>
          <div className="flex justify-center mt-8">
            <Link href="/portfolio">
              <a>
                <button className=" bg-blue-300 text-blue-800  font-bold   px-4 py-2 rounded-lg shadow-md  focus:outline-none mr-8 ">
                  <h6 className="tracking-tighter">Projects</h6>
                </button>
              </a>
            </Link>
            <Link href="/blog">
              <a>
                <button className=" bg-gray-300 text-blue-500 font-bold   px-4 py-2 rounded-lg   focus:outline-none ">
                  <h6 className="tracking-tighter">Blog</h6>
                </button>
              </a>
            </Link>
          </div>
          <h1 className="mt-16 tracking-tight leading-tight text-gray-800 sm:text-2xl">
            Available for Internship and Full time position.
          </h1>
          <div className=" mt-2 flex justify-start">
            <Link href="/contact">
              <a>
                <button className="mt-2 bg-gray-300 text-gray-700    px-3 py-2 rounded-lg shadow-md  focus:outline-none ">
                  <h6 className="tracking-tighter">Get In Touch</h6>
                </button>
              </a>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
