"use client";

import { Dispatch, SetStateAction } from "react";

type FilterProps = {
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
};

export default function Filter({ filter, setFilter }: FilterProps) {
  const baseStyle = "px-4 py-2 rounded-lg font-semibold text-white";
  const active = "bg-blue-600";
  const inactive = "bg-gray-600";

  return (
    <div className="flex gap-4 mt-6">
      <button
        onClick={() => setFilter("all")}
        className={`${baseStyle} ${filter === "all" ? active : inactive}`}
      >
        All
      </button>
      <button
        onClick={() => setFilter("active")}
        className={`${baseStyle} ${filter === "active" ? active : inactive}`}
      >
        Active
      </button>
      <button
        onClick={() => setFilter("completed")}
        className={`${baseStyle} ${filter === "completed" ? active : inactive}`}
      >
        Completed
      </button>
    </div>
  );
}
