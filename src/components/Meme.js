import React from "react";

const Meme=({ title, author, url })=>{
  fetch("https://meme-api.com/gimme/50")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.memes);
      for (var i = 0; i < data.memes.length; i++) {
        console.log(Array[i].author);
      }
    });
  return (
    <div className="project-item">
      <h3> </h3>
      <p> </p>
      <div className="technologies">
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default Meme;
