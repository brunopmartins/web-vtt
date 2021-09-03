import { useQuery } from "react-query";
const url = "https://www.dnd5eapi.co/api";

export function useCompendiumItemQuery(category, item) {
  return useQuery(
    ["compendium", category, item],
    () => fetch(`${url}/${category}/${item}`).then((res) => res.json()),
    { enabled: !!item }
  );
}
