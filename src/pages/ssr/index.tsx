import { pokeapiUrl } from "@/constants";
import { Pokemon } from "@/models/pokemon";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

interface Props {
  pokemon: Pokemon;
}

export default function SSR({
  pokemon,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main className="m-10">
      <h2 className="text-3xl font-bold my-5">SSR (Server-side Rendering)</h2>
      <p className="my-2">
        {pokemon.id}: {pokemon.name}
      </p>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const res = await fetch(pokeapiUrl);
  const pokemon = (await res.json()) as Pokemon;

  return {
    props: {
      pokemon,
    },
  };
};
