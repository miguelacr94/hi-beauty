import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

const PopOver = ({ child, content }) => {
  return (
    <Popover className="relative">
      <>
        <Popover.Button className="flex items-center outline-none">
          {child}
        </Popover.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="fixed right-0 z-10 max-w-sm mt-2 transform -translate-x-4 md:-translate-x-1/3">
            <div className="overflow-hidden bg-white rounded-md shadow-sm ring-1 ring-opacity-10 ring-muted">
              {content}
            </div>
          </Popover.Panel>
        </Transition>
      </>
    </Popover>
  );
};

export default PopOver;
