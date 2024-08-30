/* eslint-disable react/prop-types */
import { useState } from "react";
import {MONEY_TYPES} from './contants.js'


export function Table({className, data}) {
    // eslint-disable-next-line no-unused-vars
    const [datas, setDatas] = useState(data);    

    const biensOuFlux = datas.filter(dt => !MONEY_TYPES.includes(dt.type)).sort((data1, data2) => {
        return data1.type.localeCompare(data2.type)
    })
    

    return <table className={className}>
        <thead>
            <tr>
                <th>
                    {className.includes("possessions") ? 
                        <span>Possessions</span> : <span>Flux</span>
                    }
                </th>
                <th>Valeur</th>
                <th>Type</th>
                <th>Date</th>
                <th>Propriétaire</th>
            </tr>
        </thead>
        <tbody>
            {biensOuFlux.map((bien, index) => {
                return (
                    <TableRow key={index} value={bien}/>
                )
            })}
        </tbody>
    </table>
}


function TableRow({value}) {

    const styleIn = {
        color: "rgb(32, 139, 32, .7)"
    }
    const styleOut = {
        color: "rgb(177, 36, 36, 0.7)"
    }


    return <tr>
        <td style={{color: "rgba(1, 1, 66, 0.801)"}}>{value.libelle}</td>
        <td style={{color: "#4d4d4d"}}>{(value.valeur).toLocaleString()}</td>
        <td style={value.type === "ENTRANT" ? styleIn : styleOut} >{value.type}</td>
        <td>{value.dateDebut.slice(0, 10)}</td>
        <td>{value.possesseur.nom}</td>
    </tr>
}