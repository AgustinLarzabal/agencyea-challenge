"use client";
import { useState } from "react";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import type { Category as ICategory } from "../../types";

type Props = {
  category: ICategory;
};

function Category({ category: { id, name, sublevels } }: Props) {
  const [, , order] = useSelectedLayoutSegments();
  const [isToggled, toggle] = useState<boolean>(false);

  return (
    <div className="ml-4">
      <Link href={`/${id}/0/${order}`}>{name}</Link>

      {sublevels?.length! > 0 && (
        <span
          className="cursor-pointer pl-2"
          onClick={() => toggle((isToggled) => !isToggled)}
        >
          [{isToggled ? "-" : "+"}]
        </span>
      )}

      {isToggled &&
        sublevels?.map((sublevel) => (
          <Category key={sublevel.id} category={sublevel} />
        ))}
    </div>
  );
}

export default Category;
