import { MDXProvider } from "@mdx-js/react";
import Link from "next/link";
import Head from "next/head";

export default function blog({ children, frontMatter }) {
  return (
    <div>
      <Head>
        <title>{frontMatter.title} - Wilbred Anto</title>
        <meta name="description" content={frontMatter.description} />
      </Head>
      <div className="mx-auto pl-2 max-w-5xl">
        <Link href="/blog">
          <a className="text-gray-500 hover:text-blue-600 text-xl font-bold ">
            &larr;Back
          </a>
        </Link>
      </div>
      <div className="mx-auto  prose sm:prose-lg px-4 py-6 ">
        <MDXProvider>{children}</MDXProvider>
      </div>
    </div>
  );
}
