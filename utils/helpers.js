export function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export function parseCSV(data) {
  return data
    .split("\n")
    .slice(1)
    .filter((l) => l.trim() !== "")
    .map((l) => {
      const [u, p] = l.split(",");
      return { username: u.trim(), password: p.trim() };
    });
}
