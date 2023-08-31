import React from "react";
import "./singlepost.css";
export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://i.pinimg.com/564x/99/38/7c/99387c44ed89f414033efa118bcd5c17.jpg"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem, ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className=" singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className=" singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Viet Anh</b>
          </span>
          <span className="singlePostDate">Author: 1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
          obcaecati soluta iusto possimus voluptates ullam quisquam debitis
          voluptatem? Odit error quae soluta ex officiis adipisci omnis eveniet
          quasi nesciunt tempore? Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Molestias obcaecati soluta iusto possimus voluptates
          ullam quisquam debitis voluptatem? Odit error quae soluta ex officiis
          adipisci omnis eveniet quasi nesciunt tempore? Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Molestias obcaecati soluta iusto
          possimus voluptates ullam quisquam debitis voluptatem? Odit error quae
          soluta ex officiis adipisci omnis eveniet quasi nesciunt tempore?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
          obcaecati soluta iusto possimus voluptates ullam quisquam debitis
          voluptatem? Odit error quae soluta ex officiis adipisci omnis eveniet
          quasi nesciunt tempore? Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Molestias obcaecati soluta iusto possimus voluptates
          ullam quisquam debitis voluptatem? Odit error quae soluta ex officiis
          adipisci omnis eveniet quasi nesciunt tempore? Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Molestias obcaecati soluta iusto
          possimus voluptates ullam quisquam debitis voluptatem? Odit error quae
          soluta ex officiis adipisci omnis eveniet quasi nesciunt tempore?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
          obcaecati soluta iusto possimus voluptates ullam quisquam debitis
          voluptatem? Odit error quae soluta ex officiis adipisci omnis eveniet
          quasi nesciunt tempore? Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Molestias obcaecati soluta iusto possimus voluptates
          ullam quisquam debitis voluptatem? Odit error quae soluta ex officiis
          adipisci omnis eveniet quasi nesciunt tempore?
        </p>
      </div>
    </div>
  );
}
