import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import { toast } from "sonner";
import api from "../lib/axios";
import Layout from "../components/layout/Layout";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const searchFilms = async () => {
      if (!query) return;
      
      setLoading(true);
      try {
        // TODO: Backend cần implement search endpoint:
        // GET /api/films/search?q=keyword
        // - Tìm kiếm theo title, actor, directeur
        // - Support filters: genre, country, year
        const res = await api.get(`/tasks/search?q=${query}`);
        setResults(res.data.films || []);
      } catch {
        toast.error("Lỗi khi tìm kiếm");
      } finally {
        setLoading(false);
      }
    };

    searchFilms();
  }, [query]);

  return (
    <Layout>
      <div className="search-page">
        <div className="search-header">
          <h1>Tìm kiếm</h1>
          <SearchBar />
        </div>

        {query && (
          <div className="search-results">
            <h2>Kết quả cho: "{query}"</h2>
            
            {loading ? (
              <div className="loading">Đang tìm kiếm...</div>
            ) : results.length > 0 ? (
              <div className="movies-grid">
                {results.map(film => (
                  <MovieCard key={film.id} film={film} />
                ))}
              </div>
            ) : (
              <p className="no-results">Không tìm thấy kết quả nào</p>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
}
