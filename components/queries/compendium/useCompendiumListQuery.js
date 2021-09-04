import { useQuery } from "react-query";
const url = "https://www.dnd5eapi.co/api";

export function useCompendiumListQuery(category) {
  return useQuery(["compendium", category], () =>
    fetch(`${url}/${category}`).then((res) => res.json())
  );
}
