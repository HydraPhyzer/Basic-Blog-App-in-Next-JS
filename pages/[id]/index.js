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
  let Res1 = await fetch(`https://jsonplaceholder.typicode.com/posts/${ID}`);
  let Res2 = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${ID}/comments`
  );
  let Data1 = await Res1.json();
  let Data2 = await Res2.json();

  return {
    props: {
      Data1,
      Data2,
    },
  };
};
const Pages = ({ Data1, Data2 }) => {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="max-w-xl border-2 mt-5 p-3 space-y-4 border-yellow-300 m-2 text-sm md:text-lg">
        <span className="flex items-center justify-center text-center bg-yellow-300  object-cover h-[30px] w-[30px] text-yellow-800 rounded-full">
          {Data1.id}
        </span>

        <p className="capitalize border-b-4 border-green-500 w-fit">
          {Data1.title}
        </p>
        <p className="capitalize">{Data1.body}</p>
      </div>

        <h3 className="border-2 p-2 border-green-400 rounded-md bg-green-400 text-white">Comments</h3>
      <div className="Comments max-w-xl">
        {Data2.map((Elem) => {
          return (
            <div className="rounded-md space-y-2 shadow-md p-2 bg-yellow-300 m-2 text-sm md:text-lg">
                <div className="Image flex space-x-3 items-center">
                    <img className="h-[30px] w-[30px] rounded-full" src="/Profile.png" alt="" />
                    <span className="capitalize text-green-800">{Elem.name}</span>
                </div>
                <p className="text-yellow-800">{Elem.body}</p>
            </div>
            )
            
        })}
      </div>
    </div>
  );
};

export default Pages;
