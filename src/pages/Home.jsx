import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Home = () => {
    
  return (
    <main className="container">
      <section className="row-mt-3">
      <h1 className="text-center">Home</h1>
      
      <button>Films</button>
      <button>People</button>

        <Link to={`/`}>
          <img id="logo" src={Logo} />
        </Link>
        <p>Studio Ghibli Inc. is a Japanese animation film studio headquartered in Koganei, Tokyo. The studio is best known for its animated feature films, and has also produced several short films, television commercials, and one television film. The studio's mascot and most recognizable symbol is the character, Totoro, a giant cat-like spirit from the studio's 1988 film My Neighbor Totoro. Studio Ghibli's highest grossing films include Spirited Away, Ponyo, and Howl's Moving Castle. The studio was founded on June 15, 1985 by directors Hayao Miyazaki and Isao Takahata and producer Toshio Suzuki, after the success of Topcraft's anime film Nausicaä of the Valley of the Wind. Studio Ghibli has also collaborated with video game studios on the visual development of several video games. </p>
      </section>
    </main>
  );
};
export default Home;
