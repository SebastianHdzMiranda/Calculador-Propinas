// Para eliminar los React de setTip, se pueden extraer 'react'
import { Dispatch, SetStateAction } from "react"

const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
]

type TipPropinaFormProps = {
    setTip: Dispatch<SetStateAction<number>>
    tip: number
}

function TipPropinaForm({setTip, tip}: TipPropinaFormProps) {

  return (
    <div>
        <h3 className="font-black text-2xl">Propina:</h3>
        <form className="mt-3">
            {tipOptions.map( tipOption=> 
                <div className="flex gap-2" key={tipOption.id}>
                    <label 
                        htmlFor={tipOption.id}
                    >
                        {tipOption.label}
                    </label>
                    <input 
                        type="radio"
                        name="tip" 
                        value={tipOption.value}
                        // + -> tranforma string a numero
                        onChange={ e => setTip(+e.target.value)}
                        id={tipOption.id}
                        /* 
                          Se habilitara solo cuando sean iguales. cuando se guarda la orden no quiero que la propina persista checkeada
                        */
                        checked={tipOption.value === tip}
                    />
                </div>
            )}
            <div className=""></div>
        </form>
    </div>
  )
}

export default TipPropinaForm