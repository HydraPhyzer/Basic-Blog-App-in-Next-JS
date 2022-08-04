import React, { useState } from "react";
import Router from "next/router";

const Form = () => {
    let [Title,setTitle]=useState("")
    let [Body,setBody]=useState("")
    let Add = () => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title:Title,
            body:Body,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((Res)=>
        {
            setTitle("")
            setBody("")

            alert("Post Submitted")
            Router.push("/")
        })
        .catch((error)=>
        {
            alert("Error Occured")
        });
  };
  return (
    <div className="flex justify-center items-center">
      <div className=" max-w-xl flex justify-center items-center flex-col">
        <div className="Title p-2 space-y-2">
          <p>Title</p>
          <input required="true" value={Title}
            className="border-2 w-[90vw] md:w-[50vw] outline-none focus:outline-none p-2 rounded-md"
            type="text" onChange={(E)=>{setTitle(E.target.value)}}
          />
        </div>
        <div className="Body p-2 space-y-2">
          <p>Body</p>
          <textarea required value={Body} className="border-2 w-[90vw] md:w-[50vw] h-[40vh] outline-none focus:outline-none p-2 rounded-md" onChange={(E)=>{setBody(E.target.value)}}></textarea>
        </div>
        <button
          onClick={(E) => {
            Add(E);
          }}
          className="w-[90vw] md:w-[50vw] bg-yellow-400 p-2 rounded-md text-white"
        >
          Submit Post
        </button>
      </div>
    </div>
  );
};

export default Form;
