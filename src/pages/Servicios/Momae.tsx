import React from 'react'
import { NavLink } from 'react-router-dom'
import psu from "./../../assets/psu.jpg"
import pcb from "./../../assets/pcb.jpg"
import pc from "./../../assets/pc.jpg"
import pcbuild from "./../../assets/pcbuild.jpg"
import hdd from "./../../assets/hdd.jpg"


export const Momae = () => {
  return (
    <>
      <article id="momae">
        <h3>Montaje</h3>
        <p>
          Durante el primer curos de CFGM SMR estuve cursando un módulo
          llamado MOMAE donde aprendí y me aficioné al montaje y mantenimiento
          de equipos informáticos.
        </p>
        <nav>
          <NavLink to={'https://www.youtube.com/watch?v=SQwEF3tk1tg'} target="_blank">
            <img src={psu} alt="Vídoe sobre como encender uns PSUcon un clip." />
            <span>Encinede una fuente de alimentación con un clip.</span>
          </NavLink>
          <NavLink to={"https://www.youtube.com/watch?v=cRUKlp2vi1w&t=1s"} target="_blank">
            <img src={psu} alt="Vídeo sobre las partes de una placa base." />
            <span>Partes de una placa base</span>
          </NavLink>
          <NavLink to={'https://www.youtube.com/watch?v=OrI1gdhtyk0'} target="_blank">
            <img src={pc} alt="Vídeo sobre el desmontaje y montaje de un PC." />
            <span>Abriendo un PC</span>
          </NavLink>
          <NavLink to={'https://www.youtube.com/watch?v=Z9JE4w7Crdw'} target="_blank">
            <img src={psu} alt="Vídeo montando un PC en PC BUILDING SIMULATOR" />
            <span>Montaje en PC BUILDING SIMULATOR.</span>
          </NavLink>
          <NavLink to={'https://www.youtube.com/watch?v=VZo3RMzmoyA'} target="_blank">
            <img src={hdd} alt="Vídeo sobre las partes de un disco HDD" />
            <span>Partes de un disco duro mecánico</span>
          </NavLink>
        </nav>
      </article>
    </>
  )
}
