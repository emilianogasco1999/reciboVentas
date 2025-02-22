import Contador from "../contador/Contador";

const Footer = ({ darkMode, fecha }) => {
  const year = new Date().getFullYear();

  return (
    <div className="mt-5">
      <Contador fecha={fecha} />
      <footer className={`my-5 pt-5 text-center text-small ${darkMode ? 'text-white' : 'text-muted'}`}>
        <p className="mb-1">© {year} - {import.meta.env.VITE_COMPANY_NAME} - {import.meta.env.VITE_PROGRAMMER_NAME} </p>
      </footer>
    </div>
  )
}

export default Footer