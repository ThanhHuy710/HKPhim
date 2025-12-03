import { Toaster } from "sonner";
import { BrowserRouter, Routes, Route } from "react-router";
import { AuthProvider } from "./contexts/AuthContext";
import HomePage from "./pages/HomePage.jsx";
import MovieDetail from "./pages/MovieDetail.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import GoogleCallback from "./pages/GoogleCallback.jsx";
import NotFound from "./pages/NotFound.jsx";
import WatchMovie from "./pages/WatchMovie.jsx";

function App() {
  return (
    <AuthProvider>
      <Toaster richColors position="bottom-right" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/film/:id" element={<MovieDetail />} />
          <Route path="/watch/:id" element={<WatchMovie />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/google/callback" element={<GoogleCallback />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
