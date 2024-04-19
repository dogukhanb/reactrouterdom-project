import { Link, useLocation } from "react-router-dom";

const NotFoundPage = () => {
  const loc = useLocation();

  return (
    <div className="container py-6 d-flex flex-column gap-4 align-items-center">
      {loc.state && <p className="bg-danger rounded p-2 mt-3">{loc.state}</p>}
      <img
        className="img-fluid rounded w-75 my-5"
        src="/public/images.png"
        alt=""
      />
      <div>
        <h1>Aradığınız sayfa bulunamadı</h1>
        <p>
          Böyle bir sayfa bulunamıyor . Anasayfa'ya dönüp başka birşey
          arabilirsiniz
        </p>
        <Link to={"/"} className="btn btn-primary">
          Anasayfa ' ya dön.
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
