import { useState, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { BookDetailsModal } from "./components/BookDetailsModal";
import { AuthProvider } from "./contexts/AuthContext";
import {
  BookDetailsContext,
  BookDetailsProvider,
} from "./contexts/BookDetailsContext";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import Modal from "react-modal";
import { GlobalStyles } from "./styles/globalStyles";

Modal.setAppElement("#root");

function App() {
  const BookContext = useContext(BookDetailsContext);
  const [isBookDetailsModalOpen, setIsBookDetailsModalOpen] = useState(false);

  function handleOpenBookDetailsModal() {
    setIsBookDetailsModalOpen(true);
  }

  function handleCloseBookDetailsModal() {
    setIsBookDetailsModalOpen(false);
  }
  return (
    <div className="App">
      <AuthProvider>
        <BookDetailsProvider>
          <Routes>
            <Route
              path="/"
              element={
                <Home onOpenNewTransactionModal={handleOpenBookDetailsModal} />
              }
            />
          </Routes>
          <BookDetailsModal
            isOpen={isBookDetailsModalOpen}
            onRequestClose={handleCloseBookDetailsModal}
          />
        </BookDetailsProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>

      <GlobalStyles />
    </div>
  );
}

export default App;
