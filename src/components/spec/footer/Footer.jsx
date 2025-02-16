import React from 'react'

const Footer = ({darkMode}) => {
  const year = new Date().getFullYear();
  
  return (
    <footer className={`my-5 pt-5 text-center text-small ${darkMode ? 'text-white' : 'text-muted'}`}>
      <p className="mb-1">© {year} - {import.meta.env.VITE_COMPANY_NAME} - {import.meta.env.VITE_PROGRAMMER_NAME} </p>
    </footer>
  )
}

export default Footer