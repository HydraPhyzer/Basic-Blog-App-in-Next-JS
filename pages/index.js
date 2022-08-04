import Link from "next/link";
export default function Home({Data}) {
  return <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
    {
      Data.map((Elem)=>
      {
        return(
          <Link href={`/${Elem.id}`}>
            <div className="border-2 m-2 p-3 border-l-teal-500 flex justify-between flex-col cursor-pointer">
                <span className="flex items-center justify-center text-center bg-yellow-300  object-cover h-[30px] w-[30px] text-yellow-800 rounded-full">{Elem.id}</span>
                <p>{Elem.title}</p>
            </div>
          </Link>
        )
      })
    }
  </div>;
}

export let getStaticProps=async ()=>
{
  let Res=await fetch(`https://jsonplaceholder.typicode.com/posts`);
  let Data=await Res.json();

  return {
    props: {
      Data,
    }
  }
}