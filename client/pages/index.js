import React from 'react'
import CompanyCard from '../components/CompanyCard'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Footer from '../components/Footer'
const companies = [
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    url:'https://www.google.com',
    email: 'janecooper@example.com',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fusce ut placerat orci nulla pellentesque. Aenean euismod elementum nisi quis. Viverra aliquet eget sit amet tellus cras. Enim lobortis scelerisque fermentum dui faucibus in..',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    price:'500CAD'
  },
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  // More people...
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