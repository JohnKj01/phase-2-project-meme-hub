import React, { useState, useEffect } from "react";

function MemeList() {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    fetch("https://meme-api.com/gimme/50")
      .then((response) => response.json())
      .then((data) => setMemes(data.memes))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div id="memelist">
      <h1>Meme List</h1>
        <ol>
          {memes.map((meme) => (
            <li key={meme.postLink}>{meme.title}</li>
          ))}
        </ol>
    </div>
  );
}

export default MemeList;
