import "./App.css";
import Nav from "./components/Nav";
import HeroImg from "./images/image-hero-mobile.png";
import ClientAudiophile from "./images/client-audiophile.svg";
import ClientDatabiz from "./images/client-databiz.svg";
import ClientMaker from "./images/client-maker.svg";
import ClientMeet from "./images/client-meet.svg";

function App() {
  return (
    <div className="App">
      <Nav />
      <img className="heroImg" src={HeroImg} alt="" />
      <div>
        <h1>Make Remote Work</h1>
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button>Learn more</button>
        <div className="clients">
          <img src={ClientDatabiz} alt="" />
          <img src={ClientAudiophile} alt="" />
          <img src={ClientMeet} alt="" />
          <img src={ClientMaker} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
