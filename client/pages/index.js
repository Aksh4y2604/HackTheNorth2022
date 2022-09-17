import React from 'react'
import CompanyCard from '../components/CompanyCard'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Footer from '../components/Footer'
const companies = [
  {
    name: 'Jane Street',
    title: 'Hedge Fund in New York',
    url:'https://www.janestreet.com/',
    email: '',
    slug:'review/jane-steat', 
    description:'Jane Street is a research-driven trading firm where curious people work together on deep problems. We would like you to review our platform',
    imageUrl:
      'https://avatars.githubusercontent.com/u/3384712?s=280&v=4',
    price:'5000CAD'
  },
  {
    name: 'Jane Street',
    title: 'Hedge Fund in New York',
    slug:'review/jane-steat', 
    url:'https://www.janestreet.com/',
    email: '',
    description:'Jane Street is a research-driven trading firm where curious people work together on deep problems. We would like you to review our platform',
    imageUrl:
      'https://avatars.githubusercontent.com/u/3384712?s=280&v=4',
    price:'5000CAD'
  },
  {
    name: 'Jane Street',
    title: 'Hedge Fund in New York',
    slug:'review/jane-steat', 
    url:'https://www.janestreet.com/',
    email: '',
    description:'Jane Street is a research-driven trading firm where curious people work together on deep problems. We would like you to review our platform',
    imageUrl:
      'https://avatars.githubusercontent.com/u/3384712?s=280&v=4',
    price:'5000CAD'
  },
  // More companies ...
]


function Index() {
  return (
    <>
    
      <div className='space-y-2'>
        <Navbar></Navbar>
        <Header></Header>
        <div className='mx-5'>
          <CompanyCard companies={companies}></CompanyCard>
        </div>
        <Footer></Footer>
        </div>
    </>
    
  )
}

export default Index