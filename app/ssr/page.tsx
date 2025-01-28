import { format } from "date-fns";
import Image from "next/image";

import { pokeApiUrl } from "../constants";
import type { Pokemon } from "../models/pokemon";

export const dynamic = "force-dynamic";

export default async function SSR() {
  const res = await fetch(pokeApiUrl);
  const pokemon = (await res.json()) as Pokemon;
  const date = res.headers.get("Date");
  const formatDate = date
    ? format(new Date(date), "yyyy-MM-dd HH:mm:ss")
    : "Date not available";

  return (
    <main className="">
      <h2 className="text-3xl font-bold my-5">SSR (Server-side Rendering)</h2>
      <p className="my-2">
        {pokemon.id}: {pokemon.name}
      </p>
      <Image
        src={pokemon.sprites.front_default}
        width={200}
        height={200}
        alt={pokemon.name}
      />
      <p className="text-sm">
        Response Time: <span className="font-bold">{formatDate}</span>
      </p>
    </main>
  );
}
