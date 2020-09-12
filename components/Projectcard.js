import Link from "next/link";
export default function Projectcard(props) {
  return (
    <div className="  mx-2  mt-8 rounded-md shadow-md overflow-hidden max-w-2xl container   ">
      <div className="bg-blue-300 flex w-auto  py-2 hover:hidden">
        <div className="  flex items-center">
          <div className="h-3 w-3 ml-2 bg-red-700 rounded-full"></div>
          <div className="h-3 w-3  ml-2 bg-yellow-400 rounded-full"></div>
          <div className="h-3 w-3 ml-2 bg-green-700 rounded-full"></div>
        </div>
        <h1 className="mx-auto text-blue-900 font-bold">{props.title}</h1>
      </div>
      <div className="bg-gray-200">
        <Link href={props.path}>
          <img src={props.image} className=" cursor-pointer p-2"></img>
        </Link>
      </div>
      <div className="bg-gray-200 py-2 px-4">
        {/* <h1 className="mt-2 text-lg font-bold ">card</h1> */}
        <p className="tracking-tight   text-xl leading-snug py-2">
          {props.description}
        </p>
        <p>
          <Link href={props.path}>
            <a className="text-blue-700 font-bold"> Know More</a>
          </Link>
        </p>
        <p className="my-2">
          <a className="text-blue-700 font-bold" href={props.website}>
            Try here
          </a>
        </p>
      </div>
    </div>
  );
}
