import Clock from "../core/components/shared/Icons/Clock";
import ContactChannels from "../core/components/Support/ContactChannels";
import ContactForm from "../core/components/Support/ContactForm";
import JoinOurCommunity from "../core/components/Support/JoinOurCommunity";
import MainLayout from "../core/layouts/MainLayout";

const Support = () => {
  return (
    <MainLayout>
      <div className="flex  w-full items-center">
        <span className="font-semibold text-muted text-xl w-3/6">
          Contacto
        </span>
        {/* <div className="flex w-3/6 space-x-2 items-center justify-end  text-muted md:block hidden ">
         
          <Clock
            size={'1.5rem'}
          />
          <span>Estamos disponibles de lunes a domingos de 8am a 6pm</span>
        </div> */}
      </div>

      <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2 mt-4">
        <ContactChannels />
        <div className="flex space-x-2 items-start w-full text-muted md:hidden">
          <Clock
            size={'1.5rem'}
          />
          <span>Estamos disponibles de lunes a domingos de 8am a 6pm</span>
        </div>
        <div className="order-2 row-span-2 lg:order-2">
          <ContactForm />
        </div>
        <div className="order-3 lg:order-3">
          <JoinOurCommunity />
        </div>

      </div>
    </MainLayout>
  );
};

export default Support;
