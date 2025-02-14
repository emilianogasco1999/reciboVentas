import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="my-5 pt-5 text-muted text-center text-small ">
      <p className="mb-1">© {year} - {import.meta.env.VITE_COMPANY_NAME} - {import.meta.env.VITE_PROGRAMMER_NAME} </p>
    </footer>
  )
}

export default Footer