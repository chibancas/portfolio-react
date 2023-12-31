import React from 'react'
import caronte from './../../assets/caronte.jpg'

export const Web = () => {
  return (
    <article id='web'>
      <h3>Entra en la Red</h3>
      <p>
        Creación de páginas web con ReactJS,
        Wordpress, HTML5, CSS3, BootStrap y Material IU.
      </p>
      <figure>
        <img src={caronte} alt="Foto proyecto caronte" />
      </figure>
    </article>
  )
}
