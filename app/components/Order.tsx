import Link from "next/link";

interface Props {
  params: {
    category: string;
    page: string;
    order: string;
  };
}

const Order = ({ params }: Props) => {
  return (
    <nav className="flex gap-4">
      <Link href={`/${params.category}/${params.page}/asc`}>Ascending</Link>
      <Link href={`/${params.category}/${params.page}/desc`}>Descending</Link>
    </nav>
  );
};

export default Order;
