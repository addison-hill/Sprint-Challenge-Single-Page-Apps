import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import { Route, Link } from "react-router-dom";

export default function App() {
  return (
    <main>
      <nav>
      <Header />
      <div className="nav-links">
        <Link to="/">Home</Link>\
        <Link to="/characters">Characters</Link>
      </div>
      </nav>

      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/characters" component={CharacterList} />
    </main>
  );
}
