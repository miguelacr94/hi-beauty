import { useState } from "react";
import toast from "react-hot-toast";
import useProducts from "../../../hooks/queries/useProducts";
import Helpers from "../../../utils/helpers";
import Heart from "../Icons/Heart";
import LinkExternal from "../Icons/LinkExternal";
import Img from "../Img";
import StarRating from "../StarRating";

const ProductCard = ({ data, useLike = false , reaload }) => {
  const [seeMore, setSeeMore] = useState(data?.description?.length > 200 || data?.product?.description?.length > 200);

  const { doRemoveProduct } = useProducts();
  // const { useLike, item: data } = rest
  const handleRemoveFromWishList = () => {
    toast.success("Producto eliminado de tu lista de deseos");
  }

  const onRemove = async () => {

    const payload = {
      id: data?._id,
      add: false
    }
    const res = await doRemoveProduct(payload);
    if (res) {
      reaload();
    }
  }




  if (!data) return null

  return (
    <div className="relative flex flex-col w-full duration-300 bg-white rounded-md shadow-sm md:max-w-xs group ring-1 ring-gray-100 hover:ring-primary">
      {useLike && (
        <button type="button" onClick={onRemove}>
          <Heart
            size="1.2em"
            className="text-primary group-hover:text-white"
            containerClass="absolute top-2 right-3 z-20"
          />
        </button>
      )}
      <div className="relative z-10 w-full h-52">
        <Img
          className="object-contain w-full h-52"
          src={data?.gallery?.[0] || data?.product?.gallery?.[0]}
        />
        <a
          href="https://startupslab.co/"
          target="_blank"
          rel="noreferrer"
          className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full overflow-hidden text-white duration-300 scale-0 rounded-t-md group-hover:bg-primary group-hover:scale-100"
        >
          <LinkExternal size="2em" />
          <span className="text-sm font-light">Ver detalle en la tienda</span>
        </a>
      </div>
      <div className="flex flex-col w-full p-4">
        <span className="font-semibold uppercase">{data?.name || data?.product?.name}</span>
        <span className={`text-sm font-light overflow-hidden transition-bottom duration-1000 ease-in-out ${seeMore ? "line-clamp-3" : ""}`}>{data?.description || data?.product?.description}</span>
        <button onClick={() => setSeeMore(!seeMore)}>
          {seeMore ? "Ver mas" : "Ver menos"}
        </button>
        <span>{Helpers.formatCurrency(data?.price)}</span>
        <StarRating initialValue={data?.calification || data?.product?.calification} />
      </div>
    </div>
  );
};

export default ProductCard;
