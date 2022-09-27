/* This example requires Tailwind CSS v2.0+ */
const stats1 = [
  { name: 'Accessbility Issues', stat: 5 },
  { name: 'Design Issues', stat: 6},
  { name: 'Speed Issues', stat: 0 },
  { name: 'Usability Issues', stat: 1 },
]

export default function Stats({ stats }) {
  console.log('statsabcsd', stats)
  return (
    <div className="mx-auto max-w-2xl sm:pt-15 lg:max-w-7xl  px-4 sm:py-20 sm:px-6 lg:px-8 w-full sm:pb-5">
      <h3 className="text-lg mx-auto font-medium leading-6 text-gray-900">Last 30 days</h3>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3 px-10">
        {stats.map((item) => (
          <div key={item.name} className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-500">{item.name}</dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{item.stat}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
