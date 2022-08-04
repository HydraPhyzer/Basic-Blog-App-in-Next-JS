import React from 'react'

export let getStaticPaths=async ()=>
{
    let Res=await fetch(`https://jsonplaceholder.typicode.com/posts`);
    let Data=await Res.json();

    let AllPages=Data.map((El)=>
    {
        return{
            params:{
                id:El.id.toString()
            }
        }
    })

    return{
        paths:[...AllPages],
        fallback:'blocking',
    }
}

export let getStaticProps=async (context)=>
{
    let ID=context.params.id
    let Res=await fetch(`https://jsonplaceholder.typicode.com/posts/${ID}`);
    let Data=await Res.json();

    return{
        props:{
            Data
        }
    }
}
const Pages = ({Data}) => {
  return (
    <div>
        {
            
        }
    </div>
  )
}

export default Pages