import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  function buttonClose() {
    if (open) {
      setOpen(false);
    }
  }

  return (
    <header className="uppercase sm:flex justify-between  ">
      <div className="px-2 py-4 ml-2 flex items-center justify-between  ">
        <div>
          <Link href="/">
            <a>
              <h1>Wilbred Anto </h1>
            </a>
          </Link>
        </div>
        <div className="sm:hidden">
          <button
            onClick={() => setOpen(!open)}
            type="button "
            className="text-gray-900 block hover:bg-gray-200 rounded active:text-blue-500 focus:outline-none "
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {open && (
                <path
                  fill-rule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              )}
              {!open && (
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`${
          open ? "block" : "hidden"
        } pt-2 pb-2 sm:flex sm:mx-4 items-center `}
      >
        <Link href="/">
          <a
            className=" px-4 py-1  sm:mt-1 block text-gray-600  hover:bg-gray-200 hover:text-blue-600 rounded sm:ml-2"
            onClick={buttonClose}
          >
            Home
          </a>
        </Link>
        <Link href="/portfolio">
          <a
            className=" px-4 py-1 mt-1 block text-gray-600  hover:bg-gray-200 hover:text-blue-600 rounded sm:ml-2"
            onClick={buttonClose}
          >
            Portfolio
          </a>
        </Link>
        <Link href="/blog">
          <a
            className=" px-4 py-1 mt-1 block text-gray-600  hover:bg-gray-200 hover:text-blue-600 rounded sm:ml-2"
            onClick={buttonClose}
          >
            Blog
          </a>
        </Link>
        <Link href="/contact">
          <a
            className=" px-4 py-1 mt-1 block text-gray-600  hover:bg-gray-200 hover:text-blue-600 rounded sm:ml-2"
            onClick={buttonClose}
          >
            Contact
          </a>
        </Link>
      </div>
    </header>
  );
}
