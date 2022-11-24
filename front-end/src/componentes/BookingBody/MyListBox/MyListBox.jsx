
import { useState,Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import "./MyListBox.css"
const horarios = [
    { id: 1, horario: '10:00' },
    { id: 2, horario: '10:05' },
    { id: 3, horario: '10:10' },
    { id: 4, horario: '10:15' },
    { id: 5, horario: '10:20' },
    { id: 6, horario: '10:25'},
    { id: 7, horario: "10:30" },
    { id: 8, horario: "10:35" },
    { id: 9, horario: "10:40" },
    { id: 10, horario: '10:45' },
    { id: 11, horario: '10:50' },
    { id: 12, horario: '10:55' },
    { id: 13, horario: '11:00' },
]

const MyListbox =()=> {
    const [selected, setSelected] = useState(horarios[0])

    return (
        <div className="fixed top-16 w-72">
        <Listbox value={selected} onChange={setSelected}>
            <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate">{selected.horario}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                />
                </span>
            </Listbox.Button>
            <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {horarios.map((horario) => (
                    <Listbox.Option
                    key={horario.id}
                    className={({ active }) =>
                        `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-amber-100 text-amber-900 cursor-pointer' : 'text-gray-900 cursor-pointer'
                        }`
                    }
                    value={horario}
                    >
                    {({ selected }) => (
                        <>
                        <span
                            className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                            }`}
                        >
                            {horario.horario}
                        </span>
                        {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            </span>
                        ) : null}
                        </>
                    )}
                    </Listbox.Option>
                ))}
                </Listbox.Options>
            </Transition>
            </div>
        </Listbox>
        </div>
    )
}

export default MyListbox;




