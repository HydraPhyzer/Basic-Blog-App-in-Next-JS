import React from "react";

export let getStaticPaths = async () => {
  let Res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  let Data = await Res.json();

  let AllPages = Data.map((El) => {
    return {
      params: {
        id: El.id.toString(),
      },
    };
  });

  return {
    paths: [...AllPages],
    fallback: "blocking",
  };
};

export let getStaticProps = async (context) => {
  let ID = context.params.id;
  let Res = await fetch(`https://jsonplaceholder.typicode.com/posts/${ID}`);
  let Data = await Res.json();

  return {
    props: {
      Data,
    },
  };
};
const Pages = ({ Data }) => {
  return (

    <div className="flex justify-center">
        <div className="max-w-xl border-2 mt-5 p-3 space-y-4 border-yellow-300 m-2 text-sm md:text-lg">
        <span className="flex items-center justify-center text-center bg-yellow-300  object-cover h-[30px] w-[30px] text-yellow-800 rounded-full">1</span>

        <p className="capitalize border-b-4 border-green-500 w-fit">
            {Data.title}
        </p>
        <p className="capitalize">
            {Data.body}
        </p>
        </div>
    </div>
  );
};

export default Pages;
