import { FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logoWhite.svg";
import { Container } from "./styles";
import { AuthContext } from "../../contexts/AuthContext";

export function Login() {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignIn(event: FormEvent) {
    event.preventDefault();
    const data = {
      email,
      password,
    };
    await signIn(data);
  }
  return (
    <Container>
      <form>
        <img src={logo} alt="Logo Ioasys" />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="group-password">
          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={handleSignIn}>
            Entrar
          </button>
        </div>
      </form>
    </Container>
  );
}
