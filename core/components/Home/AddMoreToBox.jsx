import { useEffect, useState } from "react";
import useProducts from "../../hooks/queries/useProducts";
import ProductCard from "../shared/Cards/ProductCard";
import ProductCardMovil from "../shared/Cards/ProductCardMovil";
import AppCarousel from "../shared/Carousel";

const AddMoreToBox = () => {
  const { products } = useProducts();

  const carouselResponsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };



  return (
    <div className="flex flex-col items-start justify-center w-full p-4 space-y-4 rounded-md shadow-sm">
      <div className="flex flex-col items-start justify-center">
        <span className="font-semibold text-lg">
          Añade más productos a tu <b className="font-semibold">Box</b>
        </span>
        <span className="text-lg font-light text-grey">Productos más vendidos</span>
      </div>
      <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 hidden md:block">
        {[...products].map((p, i) => {
          return <ProductCard
            data={p}
            key={i} />;
        })}
      </div>

      <div className="block md:hidden w-full  bg-white p-4">
        <AppCarousel
          element={<ProductCardMovil />}
          items={products}
          itemClass="px-0"
          activeDotColor="bg-white"
          autoPlay
          responsive={carouselResponsive}

        />
      </div>

    </div>

  );
};

export default AddMoreToBox;