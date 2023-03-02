import usePlansQuery from "../../hooks/queries/usePlansQuery";
import ErrorLayout from "../../layouts/ErrorLayout";
import LoadingLayout from "../../layouts/LoadingLayout";
import Plan from "../shared/Cards/Plan";
import Img from "../shared/Img";
import Wrapper from "../shared/Wrapper";

const Plans = ({ bannerBackground = "bg-primary", className = "" }) => {
  const { plans, isLoading, hasError } = usePlansQuery();

  if (isLoading) {
    return <LoadingLayout message="Obteniendo planes de suscripción" />;
  }

  if (hasError) {
    return <ErrorLayout error="Error al obtener los planes :(" />;
  }

  return (
    <section className="flex flex-col w-full bg-white" id="plans">
      <div
        className={`flex flex-col items-center w-full px-10 pt-10 space-y-4 text-center lg:pt-20 pb-44 md:space-y-0 ${bannerBackground} ${className}`}
      >
        <h3 className="text-3xl font-semibold">
          Selecciona uno de nuestros planes
        </h3>
        {/* <span className="text-lg font-light">
          Recibe tu cajita completamente gratis
        </span> */}
      </div>
      <Wrapper className="justify-center transform -translate-y-28">
        <div className="grid w-full grid-cols-1 gap-5 px-2 xl:w-4/5 md:px-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:px-0">
          {plans.map((plan, index) => (
            <Plan
              key={index}
              id={plan.id}
              title={plan.title}
              price={plan.price}
              recurrent={plan.recurrent}
              discount={plan.discount}
              isHot={plan.isHot}
              items={plan.items}
            />
          ))}
        </div>
      </Wrapper>
      <Wrapper className="flex-col justify-between space-y-4 text-sm font-light text-center text-gray-500 transform -translate-y-12 xl:px-0 md:flex-row md:space-y-0">
        <span>Puedes cancelar en cualquier momento, no tenemos cláusulas.</span>
        <Img src="/assets/images/paymethods.webp" alt="paymethods" />
      </Wrapper>
    </section>
  );
};

export default Plans;
