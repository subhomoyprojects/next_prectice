"use client";
// export default async function SearchParams({ searchParams }) {
//   const resolvedParams = await searchParams;
//   console.log(resolvedParams);

import { useSearchParams } from "next/navigation";

//   return (
//     <div>
//       <h1>Search Params</h1>

//       <p>Search: {resolvedParams.search}</p>
//       <p>Category: {resolvedParams.category}</p>
//     </div>
//   );
// }
export default function SearchParams() {
  const resolvedParams = useSearchParams();
  console.log(resolvedParams);

  return (
    <div>
      <h1>Search Params</h1>

      <p>Search: {resolvedParams.get("search")}</p>
      <p>Category: {resolvedParams.get("category")}</p>
    </div>
  );
}
