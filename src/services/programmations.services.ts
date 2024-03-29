import type { Programmation } from "@/services/fakers/inferred-types.faker";

async function getProgrammation(id: number): Promise<Programmation> {
  if (!id) throw new Error("ID is required");

  const response = await fetch(
    "https://strapi.teetsh.com/api/programmations/" + id,
    {
      headers: {
        Authorization: "Bearer " + import.meta.env.VITE_TOKEN
      }
    }
  );
  const { data } = await response.json();

  return data;
}

export { getProgrammation };
