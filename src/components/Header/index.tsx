import logo from "../../assets/logo.svg";
import logOut from "../../assets/Log Out.svg";
import { Container } from "./styles";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  const { user, signOut } = useContext(AuthContext);

  return (
    <Container>
      <div className="wrapper-header">
        <img src={logo} alt="logo Ioasys" />
        <div className="infos">
          <span>Bem vindo, </span>
          <strong>{user?.name ? user.name : ""}</strong>
          <button
            onClick={() => {
              signOut();
              navigate("/login");
            }}
          >
            <img src={logOut} alt="logout icon" />
          </button>
        </div>
      </div>
    </Container>
  );
}
