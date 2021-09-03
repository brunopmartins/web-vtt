import {useQuery} from "react-query";
const url = "https://www.dnd5eapi.co/api"

export function useSpellListQuery() {
    return useQuery(`spells-list`, () =>
        fetch(`${url}/spells`).then(res =>
            res.json()
        )
    )
}
