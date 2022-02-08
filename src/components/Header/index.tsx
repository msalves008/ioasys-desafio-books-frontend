import React from "react";
import logo from "../../assets/logo.svg";
import logOut from "../../assets/Log Out.svg";
import { Container } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <div className="wrapper-header">
        <img src={logo} alt="logo Ioasys" />
        <div className="infos">
          <span>Bem vindo, </span> 
          <strong>Guilherme!</strong>
          <button><img src={logOut} alt="logout icon" /></button>
        </div>
      </div>
    </Container>
  );
};

export default Header;
