import React from "react";

function Home() {
  return (
    <div id="home">
      <h1>MemeHub KE</h1>
      <h2>Who We Are</h2>
      <p>
        MemeHub is a React app which obtains random memes from the internet, and
        presents a list of memes as well as their details. You can refresh this
        page to get a new random list of memes. If the list looks appealing,
        click images on the navigation bar above to view them.
      </p>
      <span><img src= "https://i.imgur.com/PhdAaHj.jpg" alt="Loading..."/></span>
    </div>
  );
}

export default Home;
