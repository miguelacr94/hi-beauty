import { Popover, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'

const PopOverOpt = ({ text, content }) => {
    return (
        <Popover className="relative ">
            <Popover.Button>{text}</Popover.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
            >
                <Popover.Panel className="absolute z-10">
                    <div className="bg-white shadow-xl h-40 px-8 transform -translate-x-24">
                        {content}
                    </div>

                    <img src="/solutions.jpg" alt="" />
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}

export default PopOverOpt
