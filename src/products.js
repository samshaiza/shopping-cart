export const PRODUCTS = async () => {
  let tempArray;
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
      tempArray = json.map((item) => {
        return {
          id: item.id,
          productName: item.title,
          price: item.price,
          productImage: item.image,
        };
      });
    });
  return { tempArray };
};
