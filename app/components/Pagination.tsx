import Link from "next/link";
import { Product } from "../../types";

interface Props {
  params: {
    category: string;
    page: string;
    order: string;
  };
  products: Product[];
}

const Pagination = ({ params, products }: Props) => {
  return (
    <nav>
      {params.page !== "0" && (
        <Link
          className="pr-2"
          href={`/${params.category}/${Number(params.page) - 1}/${
            params.order
          }`}
        >
          ←
        </Link>
      )}
      {params.page}
      {Number(params.page) * 2 < products.length && (
        <Link
          className="pl-2"
          href={`/${params.category}/${Number(params.page) + 1}/${
            params.order
          }`}
        >
          →
        </Link>
      )}
    </nav>
  );
};

export default Pagination;
