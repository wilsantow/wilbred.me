import Link from "next/link";

export default function Blogcard(props) {
  console.log(props.path);
  return (
    <div className="  flex sm:flex-row-reverse flex-col  py-8    border-b-2">
      <div className=" my-auto  sm:text-center   sm:w-2/6 ">
        <time className=" text-gray-600  font-medium  px-2">{props.date}</time>
      </div>
      <div className="  px-2  sm:w-4/6">
        <h2 className="  text-xl font-bold ">
          <Link href={props.path}>
            <a>{props.title}</a>
          </Link>
        </h2>
        <p className=" mt-4 sm:mt-0 text-gray-800 ">{props.description}</p>
        <p className=" mt-2 text-blue-600 ">
          <Link href={props.path}>
            <a>Read more &rarr;</a>
          </Link>
        </p>
      </div>
    </div>
  );
}
