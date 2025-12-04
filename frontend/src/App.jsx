import { Toaster } from "sonner";
import { BrowserRouter, Routes, Route } from "react-router";
import { AuthProvider } from "./contexts/AuthContext";
import HomePage from "./pages/HomePage.jsx";
import MovieDetail from "./pages/MovieDetail.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import WatchMovie from "./pages/WatchMovie.jsx";
import ListPage from "./pages/ListPage.jsx";

function App() {
  return (
    <AuthProvider>
      <Toaster richColors position="bottom-right" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/film/:id" element={<MovieDetail />} />
          <Route path="/watch/:id" element={<WatchMovie />} />
          <Route path="/search/:type" element={<ListPage />} />
          <Route path="/search/genre/:genre" element={<ListPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
