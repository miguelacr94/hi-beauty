import ProductCard from "../shared/Cards/ProductCard";

const PurchaseProducts = ({ dataDetails }) => {

  console.log(dataDetails);

  return (
    <div className="flex flex-col items-center w-full p-4 space-y-4 bg-white rounded-md shadow-sm">
      {dataDetails?.products.map((p, i) => (
        <ProductCard
          key={i}
          data={p}
        />
      ))}
    </div>
  );
};

export default PurchaseProducts;
