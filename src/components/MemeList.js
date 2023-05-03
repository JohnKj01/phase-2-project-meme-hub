function Memes(){
const [memes, setMemes] = useState([]);

 useEffect(() => {
  fetch('https://meme-api.com/gimme/50')
    .then((response) => response.json())
    .then((data) => console.log(data.memes));
 []);
 return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/list">Meme List</Link>
            </li>
          </ul>
        </nav>
        </div>
    <Router/>
}