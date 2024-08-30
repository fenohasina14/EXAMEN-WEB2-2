

const TITLE = ["Patrimony", "Money", "Savings Account", "Current Account"]

import {MONEY_TYPES} from './contants.js'

export function Header({data}) {
    
    const money = data.filter(d => MONEY_TYPES.includes(d.type))    
    // console.log(money, "header");
    return <header className="round">
        {
            TITLE.map((title, index) => {
                return (
                    <MoneyCard 
                        key={index}  
                        title={title} 
                        value={matchValueWithTitle(title, money)} 
                    />
                )
            })
        }
    </header>
}

/**
 * 
 * @param {String} title
 * @param {Array} data 
 * @returns 
 */
function matchValueWithTitle(title, data) {
    if (title === "Money") return data[0].valeur
    else if (title === "Savings Account") {
        return sessionStorage.getItem("savingsAccount") ? 
            sessionStorage.getItem("savingsAccount") : data[1].valeur;
    }
    else if (title === "Current Account")return data[2].valeur
    else return sessionStorage.getItem("patrimoine") ? sessionStorage.getItem("patrimoine") : 0;
}


function MoneyCard({title, value}) {

    return <div className="card round centered">
        <p style={{color: "#40408080"}} >{title}</p>
        <h3>
            <span style={{fontSize: "1rem"}}>Ar </span>
            {isNaN(value) ? "..." : (value).toLocaleString()}
        </h3>
    </div>
}