import React from 'react'
import { Routes, Route } from 'react-router'
import LandingPage from './pages/landing'
import ContactsPage from './pages/contacts'
import ProjectsPage from './pages/project'
import AboutPage from './pages/about'
import Navbar from './components/navbar'
import Footer from './components/footer'
import PageNotFound from './pages/ErrorPages/404Error'
import ProjectDetails from './pages/ProjectDetails'
import AddProject from './pages/Auth/AddProject'

const App = () => {
  return (
    <div className='bg-[#2D3E50] h-fit text-[#ECF0F1] text-[18px]'>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/contacts' element={<ContactsPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/aboutme' element={<AboutPage />} />
        <Route path='*' element={<PageNotFound />} />
        <Route path='/projectdetails/:id' element={<ProjectDetails />} />
        <Route path='/addproject' element={<AddProject />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App