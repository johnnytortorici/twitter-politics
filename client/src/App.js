import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import styled from "styled-components";

import Trump from "./components/Trump";
import Hillary from "./components/Hillary";

import GlobalStyles from "./GlobalStyles";
import { FaTwitter } from "react-icons/fa";

require("dotenv").config();

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Wrapper>
          <h1>
            <FaTwitter size="25" /> Twitter Politics
          </h1>
          <About>See what Trump and Hillary are saying on Twitter.</About>
          <nav>
            <NavItem to="/trump" activeClassName="selected">
              Trump
            </NavItem>
            <NavItem to="/hillary" activeClassName="selected">
              Hillary
            </NavItem>
          </nav>
          <Switch>
            <Route path="/trump">
              <Trump />
            </Route>
            <Route path="/hillary">
              <Hillary />
            </Route>
          </Switch>
        </Wrapper>
      </Router>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const About = styled.p`
  margin-bottom: 20px;
  font-size: 1.1em;
  font-style: italic;
  text-align: center;
`;

const NavItem = styled(NavLink)`
  &.selected {
    border-bottom: 3px solid #1a91da;
  }
`;

export default App;
