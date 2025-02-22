import { useEffect, } from 'react';
import useCountdown from '../../../hooks/useCountdown';
import Style from './contaodr.module.css'
import { useNavigate } from "react-router-dom";


const Contador = ({ fecha }) => {
  const navigate = useNavigate();
  // const targetDate = "2025-02-20T00:00:00"; // Formato ISO
  const { days, hours, minutes, seconds } = useCountdown(fecha);

  useEffect(() => {
    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
      navigate("/finishsystem");
    }
  }, [days, hours, minutes, seconds]);



  return (
    <div>
      <h1 className='text-center'>Tiempo Restante</h1>
      <div className='d-block d-sm-flex justify-content-center text-center'>
        <div className={Style.timeBox}>
          <span className='h1'> {days}</span>
          <div className={Style.label}>Dias</div>
        </div>
        <div className={Style.timeBox}>
          <span className='h1'>{hours} </span>
          <div className={Style.label}>Horas</div>
        </div>
        <div className={Style.timeBox}>
          <span className='h1' >{minutes}</span>
          <div className={Style.label}>Minutos</div>
        </div>
        <div className={Style.timeBox}>
          <span className='h1' >{seconds} </span>
          <div className={Style.label}>Segundos</div>
        </div>
      </div>
    </div >
  )
}

export default Contador