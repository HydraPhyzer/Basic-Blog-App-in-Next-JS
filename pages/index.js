import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home({ Data }) {
  let [State, setState] = useState(0);
  let Dec = () => {

    State>0?setState(State - 1):setState(0);
  };

  let Inc = () => {

    (State*6)+6 < Data.length ?setState(State + 1):setState(State);
  };
  return (
    <div>
      <div
        className="flex rounded-md justify-center items-center my-5 focus:border-none"
        role="group">
        <button
          onClick={() => {
            Dec();
          }}
          type="button"
          className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          -
        </button>
        <button
          type="button"
          className="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          {State}
        </button>
        <button
          onClick={() => {
            Inc();
          }}
          type="button"
          className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          +
        </button>

      </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {Data.slice(State * 6, State * 6 + 6).map((Elem) => {
            return (
              <Link href={`/${Elem.id}`} key={Elem.id}>
                <div className="border-2 m-2 p-3 border-l-teal-500 flex justify-between flex-col cursor-pointer">
                  <span className="flex items-center justify-center text-center bg-yellow-300  object-cover h-[30px] w-[30px] text-yellow-800 rounded-full">
                    {Elem.id}
                  </span>
                  <p>{Elem.title}</p>
                </div>
              </Link>
            );
          })}
        </div>
    </div>
  );
}

export let getStaticProps = async () => {
  let Res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  let Data = await Res.json();

  return {
    props: {
      Data,
    },
  };
};
