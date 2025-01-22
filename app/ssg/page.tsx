import Image from "next/image";

import { pokeApiUrl } from "../constants";
import type { Pokemon } from "../models/pokemon";

export default async function SSR() {
  const res = await fetch(pokeApiUrl, { cache: "force-cache" });
  const pokemon = (await res.json()) as Pokemon;
  console.log({ pokemon });

  return (
    <main className="">
      <h2 className="text-3xl font-bold my-5">SSG (Static-site Generation)</h2>
      <p className="my-2">
        {pokemon.id}: {pokemon.name}
      </p>
      <Image
        src={pokemon.sprites.front_default}
        width={200}
        height={200}
        alt={pokemon.name}
      />
    </main>
  );
}
