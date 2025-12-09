export default function ResultNameForListPage({ type, name }) {
    const handlerTypeAndName = (type, name) => {
            if (type == "single-movies") {
                return " Phim lẻ";
            } else if (type == "series") {
                return " Phim bộ";
            } else if (type == "genre" && name) {
                return ` Thể loại "${name}"`;
            } else if(type == "country" && name){
                return ` Quốc gia "${name}"`;
            } else if(type == "title" && name){
                return ` Từ khóa "${name}"`;
            }
        };
    return (
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">
          {handlerTypeAndName(type,name)}
        </h2>
    );
}