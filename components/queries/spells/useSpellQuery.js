import {useQuery} from "react-query";
const url = "https://www.dnd5eapi.co/api"

export function useSpellQuery(spellName) {
    return useQuery(['spell', spellName], () =>
        fetch(`${url}/spells/${spellName}`).then(res =>
            res.json()
        )
    )
}
