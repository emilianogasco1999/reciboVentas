import React from 'react'
import useCountdown from '../../../hooks/useCountdown';


const Contador = ({ fecha }) => {
  // const targetDate = "2025-02-20T00:00:00"; // Formato ISO
  const { days, hours, minutes, seconds } = useCountdown(fecha);

  return (
    <div>
      <h1>Tiempo restante:</h1>
      <p>{days} días, {hours} horas, {minutes} minutos, {seconds} segundos</p>
    </div>
  )
}

export default Contador