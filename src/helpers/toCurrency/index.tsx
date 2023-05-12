export const toCurrency = (price: number | string) =>
  Number(price).toLocaleString("BRL", {
    currency: "BRL",
    style: "currency",
  });
