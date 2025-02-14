

const Container = ({ size, children, className }) => {
  const existingSize = size ? `container-${size}` : 'container'
  return (
    <div className={`${existingSize} ${className}`} >
      {children}
    </div>

  )
}

export default Container