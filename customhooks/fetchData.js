async function fetchData(url) {
    const rs = await fetch(url)
    const json = await rs.json()
    return json
}
export default fetchData;