const misDatos = [
    {
        Nombre: "Juan José",
        Apellidos: "Fernández",
        Edad:"20",
        Localidad: "04620,Vera",
        Estudios1: "CFGM Sistemas Microinformáticos y Redes",
        Estudios2: "CFGS Administracion de Sistemas Informáticos en Red"
    }
]

export const Datos = () => {
  return (
    <ul>
        {
            misDatos.map((datos)=>{
                return(
                    <>
                        <li>{datos.Nombre}</li>
                        <li >{datos.Apellidos}</li>
                        <li>{datos.Localidad}</li>
                        <li>{datos.Estudios1}</li>
                        <li>{datos.Estudios2}</li>
                    </>
                )
            })
        }
    </ul>
  )
}

