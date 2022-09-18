import Link from "next/link"
export default function CompanyCard({ companies }) {
  return (
    <ul role="list" className="mx-auto grid grid-cols-1 gap-6">
<<<<<<< HEAD
      {companies.map((company) => (
        <li key={company.id} className="text-center mx-auto col-span-1 w-3/4 divide-y divide-gray-200 rounded-lg bg-white shadow h-80">
=======
      {companies.map((company, key) => (
        
        <li key={key} className="text-center mx-auto col-span-1 w-3/4 divide-y divide-gray-200 rounded-lg bg-white shadow h-80">
>>>>>>> 180ec9d (changed the navbar and created a company register page)
          <div className='flex flex-col items-center h-5/6 justify-between sm:space-x-6 sm:p-6 p-3 sm:flex-row'>
            <div className="flex w-1/3">
              <div className="flex-1 truncate">
                <a className='no-decoration' href={company.demo}>
                  <div className="flex flex-col sm:flex-row items-center space-x-3 justify-center">

                    {company.imageUrl ? <img className="h-20 w-20 flex-shrink-0 rounded-full object-scale-down bg-gray-300" src={company?.imageUrl} alt="" /> : null}

                    <h3 className="underline truncate text-sm font-medium text-gray-900">{company.company}</h3>

                  </div>
                </a>
                <p className="mt-1 truncate text-sm text-gray-500">{company.title}</p>
              </div>
            </div>
            <div className="flex w-2/3 items-center h-5/6 justify-between space-x-4 p-1 md:p-3 ">

              <p className="text-gray-700 text-left line-clamp-3 md:line-clamp-5">{company.description}</p>
            </div>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="flex w-0 flex-1">
                <Link
                  href={`review/${company.company.replace(/\s+/g, '-').toLowerCase()}`}
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                >
                  <a className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500">


                    <span className="ml-3">Review</span>
                  </a>
                </Link>
              </div>
              <div className="-ml-px flex w-0 flex-1">
                <a
                  href={'#'}
                  className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-indigo-600 hover:text-gray-500 "
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>

                  <span className="ml-3">{company?.pay}</span>
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
