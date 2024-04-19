import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DetailPage from "./pages/DetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/urunler" element={<ProductsPage />} />

        {/* Dynamic Route */}
        <Route path="/urun/:id" element={<DetailPage />} />
        {/*  Nested Route */}
        <Route path="/ekstra" element={<Layout />}>
          <Route path="kategoriler" element={<h1>Kategoriler</h1>} />
          <Route path="kampanyalar" element={<h1>Kampanyalar</h1>} />
          <Route path="ayarlar" element={<h1>Ayarlar</h1>} />
        </Route>

        {/* Route dışında bütün sayfalar için  */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
