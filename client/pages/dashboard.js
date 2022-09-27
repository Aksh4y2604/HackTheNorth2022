import Reviews from "../components/Reviews"
import Stats from "../components/Stats"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import axios from 'axios'
import { useEffect, useState } from "react"
function Dashboard() {
    const [stats,setStats] = useState([]); 
    const [reviews,setReviews] = useState([]); 
    const getData = async () => {
        const companies = await axios.get(`https://fathomless-dawn-21585.herokuapp.com/application?companyName=${localStorage.getItem('companyName')}`, {
        });
        
        const reviewres = await axios.get('https://fathomless-dawn-21585.herokuapp.com/reviews', {
            params:{
                companyName:localStorage.getItem('companyName')
            }
        })
        const stats = [
            { name: 'Accessbility Issues', stat: companies.data.issue_count_accessibility },
            { name: 'Speed Issues', stat: companies.data.issue_count_speed },
            { name: 'Usability Issues', stat: companies.data.issue_count_usability },
        ]
        setStats(stats)
        setReviews(reviewres.data)
        console.log(reviews)
    }
    useEffect(() => {
        getData();
    }, [])
    console.log('reviews', reviews)
    return (
        <>
            <div className="w-full flex flex-col gap-2">
                <Navbar></Navbar>
                <div className="px-6 w-full flex flex-col gap-3">
                    <Stats stats={stats}></Stats>
                    <Reviews reviews={reviews}></Reviews>
                </div>
                <Footer></Footer>
            </div>
        </>

    )
}

export async function getStaticProps() {
    const companies = await axios.get('https://fathomless-dawn-21585.herokuapp.com/applications', {
    params: {
      testerId:10
    }
  });

    const companyData = companies.data[0];
    console.log(companyData);

    return {
        props: {
            data: companyData
        },
        revalidate: 3600,
    }
}

export default Dashboard