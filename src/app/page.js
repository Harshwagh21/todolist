"use client";
import { Main } from "next/document";
import React, { useState } from "react";

const page = () => {
  const [Title, setTitle] = useState("");
  const [Desc, setDesc] = useState("");
  const [MainTask, setMainTask] = useState([]);

  let render = <h2>No task available</h2>;

  const submitHandler = (e) => {
    //this stops the page for reloading like two way binding e.preventDefault is a method for stoping the form to submit
    e.preventDefault();
    setMainTask([...MainTask, { Title, Desc }]);
    setTitle("");
    setDesc("");
    console.log(MainTask);
  };
  const deleteHandler = (i) => {
    let copytask = [...MainTask]
    copytask.splice(i,1)
    setMainTask(copytask)
  };

  if (MainTask.length > 0) {
    render = MainTask.map((t, i) => {
      return (
        <li className="flex items-center justify-between">
          <div className="mb-5 w-2/3">
            <h4 className="font-bold text-2xl">{t.Title}</h4>
            <p className="text-lg">{t.Desc}</p>
          </div>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            className="bg-white text-red-600 rounded px-4 py-2"
          >
            DELETE
          </button>
        </li>
      );
    });
  }

  return (
    <div>
      <h1 className="bg-black text-white p-5 text-center font-sans text-3xl font-bold">
        Harsh ke Notes
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="m-8 text-xl px-5 py-2 border-zinc-800 border-2 rounded"
          placeholder="Enter Task Title"
          // two way binding
          value={Title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          className="m-8 text-xl px-5 py-2 border-zinc-800 border-2 rounded"
          placeholder="Enter Task Description"
          value={Desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <button className="bg-zinc-800 text-white rounded py-3 px-5 m-5">
          Add Me
        </button>
      </form>
      <hr />
      <div className="p-10 m-7 bg-slate-400">
        <ul>{render}</ul>
      </div>
    </div>
  );
};
export default page;
