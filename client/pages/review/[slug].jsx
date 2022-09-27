
import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import CompanyHeader from '../../components/CompanyHeader'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import ReviewForm from '../../components/ReviewForm'
const sampleData = {
    id: 0,
    company: 'Jane Street',
    title: 'Hedge Fund in New York',
    demo: 'https://www.janestreet.com/',
    description: 'Jane Street is a research-driven trading firm where curious people work together on deep problems. We would like you to review our platform',
    imageUrl:
        'https://avatars.githubusercontent.com/u/3384712?s=280&v=4',
    pay: '5000CAD',
    demographic: {}
}
const company = {
    company: 'Jane Street',
    title: 'Hedge Fund in New York',
    imageUrl:
        'https://avatars.githubusercontent.com/u/3384712?s=280&v=4',
    url: 'https://www.janestreet.com/',

}

export default function Review({ data }) {
    const router = useRouter()
    const { slug } = router.query
    return (
        <>
            <Navbar></Navbar>

            <div className='w-full px-10 py-5'>
                <CompanyHeader company={data}></CompanyHeader>
            </div>
            <div className='flex-col w-full p-10'>

                <ReviewForm data={data} slug={slug} ></ReviewForm>
            </div>
            <Footer></Footer>

        </>

    )
}

export async function getStaticProps({ params }) {
    const { slug } = params
    console.log('slug', slug )
    const companies = await axios.get('https://fathomless-dawn-21585.herokuapp.com/applications', {
    params: {
      testerId:8
    }
  });

    const companyData = companies.data[0];
    console.log(companyData);

    return {
        props: {
            data: companyData,
            slug: slug, 
        },
        revalidate: 3600,
    }
}

export async function getStaticPaths() {
    const companies = await axios.get('https://fathomless-dawn-21585.herokuapp.com/applications', {
    params: {
      testerId:8
    }
  });

    const paths = companies.data.map((company) => (
        '/review/' + company.company_name.replace(/\s+/g, '-').toLowerCase()
    ));
    console.log(paths);


    return {
        paths: paths,
        fallback: 'blocking',
    };
}