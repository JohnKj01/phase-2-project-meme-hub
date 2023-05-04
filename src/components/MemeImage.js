import React, { useState, useEffect } from "react";

function MemeImage() {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    fetch("https://meme-api.com/gimme/50")
      .then((response) => response.json())
      .then((data) => {
        setMemes(data.memes);
      });
  }, []);

  return (
    <div id = "memeimage">
      {memes.map((meme) => (
        <div key={meme.postLink}>
          <h3>{meme.title}</h3>
          <img src={meme.url} alt={meme.title} />
          <p>Author: {meme.author}</p>
        </div>
      ))}
    </div>
  );
}

export default MemeImage;
