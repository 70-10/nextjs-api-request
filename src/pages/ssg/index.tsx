import { pokeapiUrl } from "@/constants";
import { Pokemon } from "@/models/pokemon";
import { GetStaticProps, InferGetStaticPropsType } from "next";

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
