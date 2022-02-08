import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./pages/Home";
import { Login } from "./pages/Login";
import { GlobalStyles } from "./styles/globalStyles";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
      
      <GlobalStyles />
    </div>
  );
}

export default App;
