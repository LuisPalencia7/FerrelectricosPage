import Header from "./components/header.jsx";
import Banner from "./components/banner.jsx";
import Categories from "./components/categories.jsx";
import ProductGrid from "./components/ProductGrid.jsx";
import "./styles/main.css";

function App() {
  return (
    <>
      <Header />
      <Categories />
      <Banner />
      <ProductGrid />
    </>
  );
}

export default App;
