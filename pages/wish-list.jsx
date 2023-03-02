import ProductCard from "../core/components/shared/Cards/ProductCard";
import ProductCardMovil from "../core/components/shared/Cards/ProductCardMovil";
import AppCarousel from "../core/components/shared/Carousel";
import Img from "../core/components/shared/Img";
import useProducts from "../core/hooks/queries/useProducts";
import MainLayout from "../core/layouts/MainLayout";

const Profile = () => {

  const { productsLiked } = useProducts(true);
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
    <MainLayout>
      <div>
        <span className="font-semibold text-muted text-xl">
          Lista de deseo
        </span>
        <div className="flex flex-col md:items-start items-center justify-center w-full p-4 space-y-4 bg-white rounded-md shadow-sm mt-4">
          <div className="flex flex-col items-start justify-center">

          </div>
          {[...productsLiked].length > 0 ?

            <div className="w-full  ">
              <div className="md:grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 hidden">
                {[...productsLiked].map((p, i) => {
                  return <ProductCard
                    realod={() => productsLiked()}
                    useLike={true}
                    data={p}
                    key={i} />;
                })}
              </div>

              <div className="block md:hidden w-full  bg-white p-4">
                <AppCarousel
                  element={<ProductCardMovil useLike={true} />}
                  items={productsLiked}
                  itemClass="px-0"
                  activeDotColor="bg-white"
                  autoPlay
                  responsive={carouselResponsive}

                />
              </div>


            </div>


            :
            <div className="w-full flex justify-center items-center flex-col md:min-h-[500px] min-h-[200px]">
              <Img
                containerClassName="flex justify-center  max-h-[16rem¡]"
                src="/assets/images/mano.png"
                className="object-contain w-full aspect-square max-h-[100px] max-w-[100px]"
              />
              <span className="text-muted text-md">No has agregado productos a tu lista</span>
            </div>
          }

        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;
