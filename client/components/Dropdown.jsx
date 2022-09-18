/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useDebugValue } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Ratings = [
    '1-Poor', 
    '2-Bad', 
    '3-Satisfactory', 
    '4-Good', 
    '5-Excellent'
] 

export default function DropDown() {
  const [selected, setSelected] = useState(Ratings[4])

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium text-gray-700">Assigned to</Listbox.Label>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
              <span className="block truncate">{selected.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {Ratings.map((person, id) => (
                  <Listbox.Option
                    key={id}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {person}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}


// export default function Dropdown() {
  //   return (
  //     <Menu as="div" className="relative inline-block text-left">
  //       <div>
  //         <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
  //           Rate your experience
  //           <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
  //         </Menu.Button>
  //       </div>
  
  //       <Transition
  //         as={Fragment}
  //         enter="transition ease-out duration-100"
  //         enterFrom="transform opacity-0 scale-95"
  //         enterTo="transform opacity-100 scale-100"
  //         leave="transition ease-in duration-75"
  //         leaveFrom="transform opacity-100 scale-100"
  //         leaveTo="transform opacity-0 scale-95"
  //       >
  //         <Menu.Items className="absolute right-0 z-20 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black overflow-auto ring-opacity-5 focus:outline-none">
  //                   <div className="py-1 overflow-visible z-100">
  //                       {Ratings.map((rating, key) => {
  //                           return(
  //                           <Menu.Item key={key}>
  //                           {({ active }) => (
  //                             <a
  //                               href="#"
  //                               className={classNames(
  //                                 active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
  //                                 'block px-4 py-2 text-sm'
  //                               )}
  //                                   >
  //                                       {rating}
  //                             </a>
  //                           )}
  //                               </Menu.Item>
  //                           )
  //                       })}
              
  //           </div>
  //         </Menu.Items>
  //       </Transition>
  //     </Menu>
  //   )
  // }
  
  
  // /* This example requires Tailwind CSS v2.0+ */
  // import { Fragment, useState } from 'react'
  // import { Listbox, Transition } from '@headlessui/react'
  // import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
  
  // const people = [
  //   { id: 1, name: 'Wade Cooper' },
  //   { id: 2, name: 'Arlene Mccoy' },
  //   { id: 3, name: 'Devon Webb' },
  //   { id: 4, name: 'Tom Cook' },
  //   { id: 5, name: 'Tanya Fox' },
  //   { id: 6, name: 'Hellen Schmidt' },
  //   { id: 7, name: 'Caroline Schultz' },
  //   { id: 8, name: 'Mason Heaney' },
  //   { id: 9, name: 'Claudie Smitham' },
  //   { id: 10, name: 'Emil Schaefer' },
  // ]