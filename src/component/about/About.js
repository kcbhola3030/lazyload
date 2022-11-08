export function getData ()
{
    return fetch('https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0.')
    .then(data=>data.json());
}