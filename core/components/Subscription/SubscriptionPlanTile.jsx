import { Disclosure } from "@headlessui/react";
import Heart from "../shared/Icons/Heart";

const SubscriptionPlanTile = ({ title }) => {
  return (
    <div className="flex items-center w-full p-4 space-x-2 bg-white rounded-md cursor-pointer hover:bg-gray-50">
      <Disclosure>
        {({ open }) => (
          <div className="flex flex-col w-full max-h-screen min-h-0 space-y-4 duration-300">
            <Disclosure.Button>
              <div className="flex items-center space-x-2 font-light">
                <Heart className="text-alert" size="1.3em" />
                <span>{title}</span>
              </div>
            </Disclosure.Button>
            <Disclosure.Panel className="text-sm font-light text-muted">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse eos
              optio molestiae expedita. Aliquam dolor nobis doloribus laborum ea
              perferendis molestias veniam quaerat, minima laboriosam, officia
              itaque voluptatibus saepe magnam.
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
    </div>
  );
};

export default SubscriptionPlanTile;
