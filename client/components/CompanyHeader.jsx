/* This example requires Tailwind CSS v2.0+ */

  export default function CompanyHeader({ company }) {
    console.log('company', company);

    return (
      <div className="overflow-hidden rounded-lg bg-white shadow">
        <h2 className="sr-only" id="profile-overview-title">
          Profile Overview
        </h2>
        <div className="bg-white p-6">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="sm:flex sm:space-x-5">
              <div className="flex-shrink-0">
                <img className="mx-auto h-20 w-20 rounded-full" src={company.img_url} alt="" />
              </div>
              <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                <p className="text-xl font-bold text-gray-900 sm:text-2xl">{company.company_name}</p>
                <p className="text-sm font-medium text-gray-600">{company.product_desc}</p>
              </div>
            </div>
            {/* <div className="mt-5 flex justify-center sm:mt-0">
              <a
                href={company.url}
                className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
              >
                View Product
              </a>
            </div> */}
          </div>
        </div>
      </div>
    )
  }
  