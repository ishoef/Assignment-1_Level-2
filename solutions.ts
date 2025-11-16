// Problem 1 Solving
function formatValue(
  value: string | number | boolean
): string | number | boolean {
  if (typeof value === "string") return value.toUpperCase();
  if (typeof value === "number") return value * 10;
  if (typeof value === "boolean") return !value;
  return value;
}

// console.log(formatValue("hello"));
// console.log(formatValue(5));
// console.log(formatValue(true));

// Problem 2 Solving

function getLength(value: string | any[]): number {
  if (typeof value === "string") return value.length;
  if (Array.isArray(value)) return value.length;
  return 0;
}

console.log(getLength("ismailnode solutions.ts"));
console.log(getLength([10, 20, 30, 40]));
