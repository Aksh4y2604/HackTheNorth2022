/* This example requires Tailwind CSS v2.0+ */
import { StarIcon } from '@heroicons/react/20/solid'

const reviews = [
  {
    id: 1,
    title: "Can't say enough good things",
    rating: 5,
    content: `
      <p>I was really pleased with the overall shopping experience. My order even included a little personal, handwritten note, which delighted me!</p>
      <p>The product quality is amazing, it looks and feel even better than I had anticipated. Brilliant stuff! I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times!</p>
    `,
    author: 'Risako M',
    date: 'May 16, 2021',
    datetime: '2021-01-06',
    },
    {
        id: 1,
        title: "Can't say enough good things",
        rating: 5,
        content: `
          <p>I was really pleased with the overall shopping experience. My order even included a little personal, handwritten note, which delighted me!</p>
          <p>The product quality is amazing, it looks and feel even better than I had anticipated. Brilliant stuff! I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times!</p>
        `,
        author: 'Risako M',
        date: 'May 16, 2021',
        datetime: '2021-01-06',
      },
  // More reviews...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Reviews({ reviews }) {
  const reviews1 = reviews.reviews;
  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-4 sm:py-15 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-lg font-medium text-gray-900">Recent reviews</h2>
        <div className="mt-6 space-y-10 divide-y divide-gray-200 border-t border-b border-gray-200 pb-10">
          {reviews1 ? reviews1.map((review, key) => (
            <div key={key} className="p-10 lg:grid lg:grid-cols-12 lg:gap-x-8 bg-white rounded-lg">
              <div className="lg:col-span-8 lg:col-start-3  xl:col-span-9 xl:col-start-3 xl:items-start xl:gap-x-8">
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          review.stars > rating ? 'text-yellow-400' : 'text-gray-200',
                          'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="ml-3 text-sm text-gray-700">
                    {review.stars}
                    <span className="sr-only"> out of 5 stars</span>
                  </p>
                </div>

                <div className="mt-4 lg:mt-6 xl:col-span-2 xl:mt-0">
                  <h3 className="text-sm font-medium text-gray-900">{review.title}</h3>
                  <div
                    className="mt-3 space-y-6 text-sm text-gray-500"
                    dangerouslySetInnerHTML={{ __html: review.neg_feedback }}
                  />
                </div>
              </div>
            </div>
          )) : null }
        </div>
      </div>
    </div>
  )
}
