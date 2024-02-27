import "./App.css";
import Nav from "./components/Nav";
import HeroImg from "./images/image-hero-mobile.png";
import ClientAudiophile from "./images/client-audiophile.svg";
import ClientDatabiz from "./images/client-databiz.svg";
import ClientMaker from "./images/client-maker.svg";
import ClientMeet from "./images/client-meet.svg";

function App() {
  return (
    <main className="App">
      <Nav />
      <img className="heroImg" src={HeroImg} alt="" />
      <div className="content-container">
        <h1>Make Remote Work</h1>
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button>Learn more</button>
        <div className="clients">
          <img src={ClientDatabiz} width="80" height="15" alt="" />
          <img src={ClientAudiophile} alt="" width="60" height="30" />
          <img src={ClientMeet} alt="" width="65" height="15" />
          <img src={ClientMaker} alt="" width="60" height="17" />
        </div>
      </div>
    </main>
  );
}

export default App;
