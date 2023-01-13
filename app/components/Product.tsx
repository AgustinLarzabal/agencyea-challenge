import { Product } from "../../types";

interface Props {
  product: Product;
}

const Product = ({ product }: Props) => {
  return (
    <div key={product.id} className="border p-4">
      <h1>{product.name}</h1>
      <p>{product.price}</p>
    </div>
  );
};

export default Product;
