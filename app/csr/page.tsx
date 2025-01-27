"use client";
import Image from "next/image";
import useSWR from "swr";

import { pokeApiUrl } from "../constants";
import type { Pokemon } from "../models/pokemon";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function CSR() {
  const { data, error, isLoading } = useSWR<Pokemon>(pokeApiUrl, fetcher);

  return (
    <main className="">
      <h2 className="text-3xl font-bold my-5">CSR (Client-side Rendering)</h2>
      {error && <p>Failed to load</p>}
      {isLoading && <p>Loading...</p>}
      {data && (
        <>
          <p className="my-2">
            {data.id}: {data.name}
          </p>
          <Image
            src={data.sprites.front_default}
            width={200}
            height={200}
            alt="Picture of the author"
          />
        </>
      )}
    </main>
  );
}
