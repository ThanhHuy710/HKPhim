import { toast } from "sonner";
import api from "../lib/axios";
import { useEffect, useState } from "react";

export default function FavoriteButton({ filmId, userId }) {
  const [favorite, setFavorite] = useState(null);
  const isFavorite = !!favorite;

  useEffect(() => {
    const fetchFavorite = async () => {
      try {
        const res = await api.get(`/favorites/${filmId}/${userId}`);
        // Backend nên trả về { data: null } nếu chưa có
        const record = res.data?.data;
        setFavorite(record ?? null);
      } catch (error) {
        console.error("Lỗi:", error);
      }
    };
    if (filmId && userId) fetchFavorite();
  }, [filmId, userId]);

  const handlerFavourite = async () => {
    try {
      if (!isFavorite) {
        const res = await api.post("/favorites", {
          film_id: filmId,
          user_id: userId,
        });
        setFavorite(res.data?.data ?? res.data);
        toast.success("Đã thêm phim vào danh sách yêu thích");
      } else {
        if (favorite?.id) {
          await api.delete(`/favorites/${favorite.id}`);
        } else {
          await api.delete("/favorites", {
            data: { film_id: filmId, user_id: userId },
          });
        }
        setFavorite(null);
        toast.success("Đã xóa phim khỏi danh sách yêu thích");
      }
    } catch (error) {
      console.error("Lỗi:", error);
      toast.error(!isFavorite ? "Không thể thêm" : "Không thể xóa");
    }
  };

  return (
    <button
      onClick={handlerFavourite}
      className="flex flex-col items-center cursor-pointer hover:text-blue-400"
    >
      <img
        src="../../public/images/AddToList.png"
        alt="Favorite"
        className="w-6 h-6"
      />
      <p className="text-sm">{isFavorite ? "Đã yêu thích" : "Yêu thích"}</p>
    </button>
  );
}