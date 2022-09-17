
import { useRouter } from 'next/router'
import CompanyHeader from '../../components/CompanyHeader'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import ReviewForm from '../../components/ReviewForm'
const data = {
    name: 'Jane Street',
    title: 'Hedge Fund in New York',
    url: 'https://www.janestreet.com/',
    email: '',
    description: 'Jane Street is a research-driven trading firm where curious people work together on deep problems. We would like you to review our platform',
    imageUrl:
        'https://avatars.githubusercontent.com/u/3384712?s=280&v=4',
    price: '5000CAD'
}

const company = {
    name: 'Jane Street',
    role: 'Hedge Fund in New York',
    imageUrl:
        'https://avatars.githubusercontent.com/u/3384712?s=280&v=4',
    url: 'https://www.janestreet.com/',

}

export default function Review() {
    const router = useRouter()
    const { slug } = router.query
    return (
        <>
            <Navbar></Navbar>

            <div className='w-full px-10 py-5'>
                <CompanyHeader company={company}></CompanyHeader>
            </div>
            <div className='flex-col w-full p-10'>

                <ReviewForm data={data} ></ReviewForm>
            </div>
            <Footer></Footer>

        </>

    )
}
