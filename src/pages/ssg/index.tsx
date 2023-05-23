import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";

import { pokeapiUrl } from "@/constants";
import type { Pokemon } from "@/models/pokemon";

interface Props {
  pokemon: Pokemon;
}

export default function SSG({
  pokemon,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main className="m-10">
      <h2 className="text-3xl font-bold my-5">SSG (Static-site Generation)</h2>
      <p className="my-2">
        {pokemon.id}: {pokemon.name}
      </p>
      <Image
        src={pokemon.sprites.front_default}
        width={200}
        height={200}
        alt="Picture of the author"
      />
    </main>
  );
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const res = await fetch(pokeapiUrl);
  const pokemon = (await res.json()) as Pokemon;

  return {
    props: {
      pokemon,
    },
  };
};
