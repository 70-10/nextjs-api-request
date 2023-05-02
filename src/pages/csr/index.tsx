import { pokeapiUrl } from "@/constants";
import { Pokemon } from "@/models/pokemon";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function CSR() {
  const { data, error, isLoading } = useSWR<Pokemon>(pokeapiUrl, fetcher);

  return (
    <main className="m-10">
      <h2 className="text-3xl font-bold my-5">CSR (Client-side Rendering)</h2>
      {error && <p>Failed to load</p>}
      {isLoading && <p>Loading...</p>}
      {data && (
        <p className="my-2">
          {data.id}: {data.name}
        </p>
      )}
    </main>
  );
}
