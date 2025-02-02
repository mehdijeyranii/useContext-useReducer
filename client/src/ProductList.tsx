import { useCart } from "./CartContext";

const ProductList = () => {
  const { dispatch } = useCart();

  const products = [
    { id: 1, name: "Laptop", price: 25000000 },
    { id: 2, name: "SmartPhone", price: 12000000 },
    { id: 3, name: "Headphone", price: 1490000 },
    { id: 4, name: "Jean", price: 1230000 },
    { id: 5, name: "T-Shirt", price: 14000 },
  ];

  return (
    <div className="p-4 border rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">Products</h2>
      {products.map((product) => (
        <div
          key={product.id}
          className="flex justify-between items-center mb-2 p-2 border-b w-96"
        >
          <span>
            {product.name} - {product.price.toLocaleString()} Rial
          </span>
          <button
            className="bg-blue-500 text-white px-3 py-1 rounded"
            onClick={() =>
              dispatch({
                type: "ADD_ITEM",
                payload: { ...product, quantity: 1 },
              })
            }
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
