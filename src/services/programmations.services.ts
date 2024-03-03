import faker from "@/services/fakers/response.faker.json";
import { Programmation } from "@/services/fakers/inferred-types.faker";

async function getProgrammation(): Promise<Programmation> {
  return faker.data;

  // const response = await fetch(
  //   "https://strapi.teetsh.com/api/programmations/" + id,
  //   {
  //     headers: {
  //       Authorization: "Bearer " + import.meta.env.VITE_TOKEN
  //     }
  //   }
  // );
  // const { data, meta } = await response.json();

  // console.log("META:", meta, "ID:", id);
  // return data;
}

export { getProgrammation };
