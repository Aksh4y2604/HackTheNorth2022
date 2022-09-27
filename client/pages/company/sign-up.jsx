/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { useState } from 'react'
import { Switch } from '@headlessui/react'
import Router from 'next/router'
import axios from 'axios'
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function SignUp() {
    const [agreed, setAgreed] = useState(false)
    let formData = {}

    const handleSubmit = async (event) => {
        event.preventDefault();
        localStorage.setItem('companyName', event.target[0].value)
        formData = {
            companyName: event.target[0].value,
            product_title: event.target[1].value,
            product_desc: event.target[2].value,
            email: event.target[3].value,
            min_age: event.target[4].value,
            max_age: event.target[5].value,
            industry: event.target[6].value,
            pay: event.target[7].value,
            phone: event.target[8].value,
        }
        axios.post('https://fathomless-dawn-21585.herokuapp.com/sign-up', formData)
            .then((res) => {
                console.log(res);
                formData = {}
            })
            .catch((err) => {
                console.log(err);
                formData = {}
            })
        Router.push('/')
    }

    return (
        <div className="overflow-hidden bg-white py-16 px-4 sm:px-6 lg:px-8 lg:py-24">
            <div className="relative mx-auto max-w-xl">
                <svg
                    className="absolute left-full translate-x-1/2 transform"
                    width={404}
                    height={404}
                    fill="none"
                    viewBox="0 0 404 404"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="85737c0e-0916-41d7-917f-596dc7edfa27"
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits="userSpaceOnUse"
                        >
                            <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
                </svg>
                <svg
                    className="absolute right-full bottom-0 -translate-x-1/2 transform"
                    width={404}
                    height={404}
                    fill="none"
                    viewBox="0 0 404 404"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="85737c0e-0916-41d7-917f-596dc7edfa27"
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits="userSpaceOnUse"
                        >
                            <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
                </svg>
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Register your company</h2>
                    <p className="mt-4 text-lg leading-6 text-gray-500">
                        Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus
                        arcu.
                    </p>
                </div>
                <div className="mt-12">
                    <form onSubmit={handleSubmit} action="#" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                        <div>
                            <label htmlFor="Company Name" className="block text-sm font-medium text-gray-700">
                                Company Name                                
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="company-name"
                                    id="company-name"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="Product Title" className="block text-sm font-medium text-gray-700">
                                Product Title
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                />
                            </div>
                        </div>
                        <div className='sm:col-span-2'>
                            <label htmlFor="Product Description" className="block text-sm font-medium text-gray-700">
                                Product Description
                            </label>
                            <div className="mt-1">
                                <textarea
                                    rows={4}
                                    className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="Targeted-Range" className="block text-sm font-medium text-gray-700">
                                Targeted Age Range
                            </label>

                            <div className="mt-1 flex flex-row">
                                <input
                                    type="number"
                                    name="Minimum Age"
                                    id="min-age"
                                    placeholder='Min-age'
                                    className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                />
                                <input
                                    type="number"
                                    name="max-age"
                                    id="max-age"
                                    placeholder='Max-age'
                                    className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                />
                            </div>
                        </div>
                        <div className="" >
                            <label htmlFor="Industry" className="block text-sm font-medium text-gray-700">Industry</label>
                            <select id="Industry" name="Industry" className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                <option>Engineering</option>
                                <option>Finance</option>
                                <option>Tech</option>
                                <option>Human Resources</option>
                                <option>Entertainment</option>
                                <option>Education</option>
                                <option>Student</option>
                            </select>
                            
                        </div>
                        <div className="">
                            <label htmlFor="Targeted-Range" className="block text-sm font-medium text-gray-700">
                                Compensation
                            </label>

                            <div className="mt-1 flex flex-row">
                                <input
                                    type="number"
                                    name="compensation"
                                    id="min-age"
                                    placeholder='CAD$'
                                    className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                />
                            </div>
                            </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">
                                Phone Number
                            </label>
                            <div className="relative mt-1 rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 flex items-center">
                                    <label htmlFor="country" className="sr-only">
                                        Country
                                    </label>
                                    <select
                                        id="country"
                                        name="country"
                                        className="h-full rounded-md border-transparent bg-transparent py-0 pl-4 pr-8 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                                    >
                                        <option>US</option>
                                        <option>CA</option>
                                        <option>EU</option>
                                    </select>
                                </div>
                                <input
                                    type="text"
                                    name="phone-number"
                                    id="phone-number"
                                    autoComplete="tel"
                                    className="block w-full rounded-md border-gray-300 py-3 px-4 pl-20 focus:border-indigo-500 focus:ring-indigo-500"
                                    placeholder="+1 (555) 987-6543"
                                />
                            </div>
                        </div>




                        <div className="sm:col-span-2">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <Switch
                                        checked={agreed}
                                        onChange={setAgreed}
                                        className={classNames(
                                            agreed ? 'bg-indigo-600' : 'bg-gray-200',
                                            'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                                        )}
                                    >
                                        <span className="sr-only">Agree to policies</span>
                                        <span
                                            aria-hidden="true"
                                            className={classNames(
                                                agreed ? 'translate-x-5' : 'translate-x-0',
                                                'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                                            )}
                                        />
                                    </Switch>
                                </div>
                                <div className="ml-3">
                                    <p className="text-base text-gray-500">
                                        By selecting this, you agree to the{' '}
                                        <a href="#" className="font-medium text-gray-700 underline">
                                            Privacy Policy
                                        </a>{' '}
                                        and{' '}
                                        <a href="#" className="font-medium text-gray-700 underline">
                                            Cookie Policy
                                        </a>
                                        .
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <button
                                type="submit"
                                className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
