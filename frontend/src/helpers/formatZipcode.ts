export function formatZipcode(zipcode: string): string {
  console.log(zipcode)
  return zipcode
    .replace(/\D/g, "")
    .replace(/^(\d{5})(\d{3})$/, "$1-$2");
}