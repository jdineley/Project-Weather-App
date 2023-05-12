export default async function getForcast(q) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=55913b845fda4cf890a152532230905&q=${q}`
    );
    if (!response.ok) throw new Error(`City ${q} not found`);
    const data = await response.json();
    return data;
  } catch (err) {
    alert(err);
    return null;
  }
}
