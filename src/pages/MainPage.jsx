import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="container d-flex flex-column gap-5 p-4">
      <h1 className="text-center">Hoşgeldiniz !</h1>
      <img
        className="w-100 rounded-3"
        src="https://st2.depositphotos.com/5456580/8085/i/450/depositphotos_80851422-stock-photo-welcome-word-under-torn-black.jpg"
        alt="welcome"
      />
      <p>
        <Link to={"/urunler"}> Ürünler sayfasında </Link>yeni çıkan bütün
        kitaplara ulaşabilirsiniz...
      </p>
    </div>
  );
};

export default MainPage;
