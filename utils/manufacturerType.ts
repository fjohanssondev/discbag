export function formatManufacturer(input: string): string {
  let modified = input.replace(/_/g, " ");
  modified = modified.toLowerCase().replace(/\b[a-z]/g, (char) => char.toUpperCase());
  
  return modified;
}