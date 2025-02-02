import Cart from "./Cart";
import { CartProvider } from "./CartContext";
import ProductList from "./ProductList";

const App = () => {
  return (
    <CartProvider>
      <div className="flex flex-col justify-center items-center min-h-screen gap-6 p-4 w-full">
        <h1 className="text-2xl font-bold">Online shop</h1>
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
};

export default App;
