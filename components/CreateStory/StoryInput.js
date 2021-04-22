import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  RefreshIcon,
  InformationCircleIcon,
  CheckIcon,
} from "@heroicons/react/outline";

export default function StoryInput({
  name,
  options,
  placeholder,
  label,
  colSpan,
  value,
  handleInput,
  infoTitle,
  infoBody,
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={`col-span-${colSpan}`}>
        <div className="flex justify-between">
          <label
            htmlFor={name}
            className="block text-sm font-medium text-gray-700"
          >
            {label}
          </label>
          {options && (
            <span className="text-sm text-gray-500" id={`${name}-optional`}>
              <button
                onClick={() => setOpen(true)}
                className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-customRed"
              >
                <InformationCircleIcon className="h-6 w-6" aria-hidden="true" />
              </button>
              <button className="bg-white ml-1 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-customRed">
                <RefreshIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </span>
          )}
        </div>
        <div className="mt-1">
          <input
            type="text"
            name={name}
            id={name}
            className="shadow-sm focus:ring-red-500 focus:border-red-500 block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder={placeholder}
            value={value}
            onChange={handleInput}
          />
        </div>
      </div>
      {!!options && (
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            static
            className="fixed z-10 inset-0 overflow-y-auto"
            open={open}
            onClose={setOpen}
          >
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                  <div>
                    <div className="mt-3 sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-lg leading-6 font-medium text-gray-900 text-center"
                      >
                        {infoTitle}
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500 leading-relaxed">
                          {infoBody}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <button
                      type="button"
                      className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm"
                      onClick={() => setOpen(false)}
                    >
                      Got It!
                    </button>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
      )}
    </>
  );
}
