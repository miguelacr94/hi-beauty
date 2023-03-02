import useSubscriptionForm from "../../hooks/useSubscriptionForm";
import Button from "../shared/Button";
import Img from "../shared/Img";

const Intro = () => {
  const { setStep } = useSubscriptionForm();

  return (
    <section className="flex flex-col items-center justify-center py-20 space-y-10 animate-fadeIn">
      <div className="flex flex-col items-center justify-center space-y-2 font-light text-center text-gray-800 md:space-y-0">
        <h2 className="text-3xl text-primary-dark">
          Actualiza tu perfil de belleza
        </h2>
        <p className="text-xl">Cuéntanos un poco sobre ti</p>
      </div>
      <Img
        className="w-40 h-40"
        src="/assets/images/survey-intro.gif"
        alt="Survey intro"
      />
      <Button
        onClick={() => setStep(1)}
        zoomOnHover
        className="px-8 text-lg"
        text="Comenzar"
      />
    </section>
  );
};

export default Intro;
