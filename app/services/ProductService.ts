export async function getAllProducts() {
  const res = await fetch(`https://snap-it-umber.vercel.app/api/product`);
  return res.json();
}
