export default async function fetchUtil(url) {
    return fetch(url).then((res) => res.json());
}
