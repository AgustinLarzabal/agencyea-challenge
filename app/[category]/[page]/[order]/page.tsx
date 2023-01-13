import Link from "next/link";
import { Product as IProduct } from "../../../../types";
import Order from "../../../components/Order";
import Pagination from "../../../components/Pagination";
import Product from "../../../components/Product";

interface Props {
  params: {
    category: string;
    page: string;
    order: string;
  };
}

const ProductsPage = async ({ params }: Props) => {
  let { products } = await import("../../../../data/products.json");

  products = products.filter(
    (product: IProduct) => String(product.sublevel_id) === params.category
  );
  products.sort((a: IProduct, b: IProduct) =>
    params.order === "asc"
      ? a.price.localeCompare(b.price)
      : b.price.localeCompare(a.price)
  );
  products = products.slice(
    Number(params.page) * 2,
    Number(params.page) * 2 + 2
  );

  return (
    <div className="flex flex-col gap-4">
      <Order params={params} />

      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr)" }}
      >
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>

      <Pagination params={params} products={products} />
    </div>
  );
};

export default ProductsPage;
