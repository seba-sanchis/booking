import { Suspense } from "react";

import { Hero, PropertyGrid, SearchBar } from "@/components";
import { Search } from "@/types";

type Props = {
  searchParams: Search;
};

export default function Home({ searchParams }: Props) {
  return (
    <main className="flex flex-col items-center">
      <Hero />

      <SearchBar />

      <Suspense fallback={<p>Loading properties...</p>}>
        <PropertyGrid searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
