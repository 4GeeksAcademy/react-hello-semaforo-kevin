import { useState } from "react";


const Semaforo = ()=>{

    const[color,setColor]= useState("");


    return(
        <div className="containerSemaforo">
            <div className={`colorRojo  ${color == "rojo" ? "activo" : ""}`}
                onClick={()=>setColor(color === "rojo" ? "": "rojo")}>
            </div>


            <div className={`colorAmarillo ${color === "amarillo" ? "activo": ""}`}
            onClick={()=> setColor(color === "amarillo" ? "": "amarillo")}>
            </div>

            <div className={`colorVerde ${color === "verde" ? "activo" : "" }`}
            onClick={()=> setColor(color === "verde" ? "" : "verde")}
            >
            </div>
        </div>
    )


}

export default Semaforo;