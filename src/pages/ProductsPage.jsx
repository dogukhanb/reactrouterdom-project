import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import FilterArea from "../components/FilterArea";
import { useSearchParams } from "react-router-dom";
Card;
const ProductsPage = () => {
  const [books, setBooks] = useState(null);
  const [searchParams] = useSearchParams();

  const order = searchParams.get("sırala");
  const query = searchParams.get("aramaTerimi");

  useEffect(() => {
    const params = {
      _sort: order === "a-z" ? "asc" : "desc", // Sıralama yöntemine göre "_sort" parametresini güncelle
      ...(query && { title_like: query }), // Arama terimine göre "title_like" parametresini ekleyin
    };

    axios
      .get("http://localhost:3000/books", { params })
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }, [order, query]);
  return (
    <div className="flex-grow-1 p-5">
      <h3>{books?.length} kitap bulundu</h3>
      <FilterArea />
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-5 mt-3">
        {books?.map((book) => (
          <div key={book.id} className="col">
            <Card book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
