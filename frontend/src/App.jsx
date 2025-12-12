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
import ListPage from "./pages/ListPage.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import DashboardPage from "./pages/admin/DashboardPage.jsx";
import FilmsManagement from "./pages/admin/FilmsManagement.jsx";
import UsersManagement from "./pages/admin/UsersManagement.jsx";
import UserDetailPage from "./pages/admin/UserDetailPage.jsx";
import PlansManagement from "./pages/admin/PlansManagement.jsx";
import SubscriptionPage from "./pages/SubscriptionPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import PurchaseHistoryPage from "./pages/PurchaseHistoryPage.jsx";

function App() {
  return (
    <AuthProvider>
      <Toaster 
        richColors 
        position="top-right" 
        toastOptions={{
          style: {
            marginTop: '80px',
          },
        }}
      />
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<HomePage />} />
          <Route path="/film/:id" element={<MovieDetail />} />
          <Route path="/watch/:id" element={<WatchMovie />} />
          <Route path="/search/:type" element={<ListPage />} />
          <Route path="/search/genre/:genre" element={<ListPage />} />
          <Route path="/subscription" element={<SubscriptionPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/purchase-history" element={<PurchaseHistoryPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/google/callback" element={<GoogleCallback />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminPage />}>
            <Route index element={<DashboardPage />} />
            <Route path="films" element={<FilmsManagement />} />
            <Route path="users" element={<UsersManagement />} />
            <Route path="users/:id" element={<UserDetailPage />} />
            <Route path="plans" element={<PlansManagement />} />
          </Route>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
