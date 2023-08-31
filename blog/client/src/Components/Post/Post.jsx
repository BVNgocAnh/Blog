import React from "react";
import "./post.css";
export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://i.pinimg.com/564x/64/e5/5f/64e55fbcf4c12963b5adae24918e5ef1.jpg"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem, ipsum dolor sit</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam esse
        consequatur voluptates. Consectetur aspernatur quidem dignissimos vitae
        nemo eaque, quae libero voluptatibus quam, laudantium ab. Voluptates
        laborum unde quis sint.
      </p>
    </div>
  );
}
