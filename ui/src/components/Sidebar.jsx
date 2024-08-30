export function Sidebar({data}){
    const FLUX = ["ENTRANT", "SORTANT"];
    // console.log(data, "flux")
    return <div className="sidebar round">
        <Logo/>

        <h3 className="username">   
            <span>Hello! c{'\''}est </span>
            {data[0].possesseur.nom}
        </h3>

        {FLUX.map((flux, index)=> {
            return (
                <FluxCard key={index} type={flux} value={flux === "ENTRANT" ? calculateFlux(data).entrant : 
                    calculateFlux(data).sortant
                }  />
            )
        })}
    </div>
}



function FluxCard({type, value}) {
    return <div  className="flux round centered">
        <p style={{color: "#40408080"}}>{type} /mois</p>
        <h3>
            <span style={{fontSize: "1rem"}}>Ar </span>
            {value.toLocaleString()}
        </h3>
    </div>
}


export function Logo () {
    return <div className="logo">
        <h1>Patrimoney</h1>
    </div>
}

/**
 * Calcul du flux
 * @param {Array} data 
 * @returns {Object}
 */
function calculateFlux (data) {
    let entrant = 0;
    let sortant = 0;

    for (let flux of data) {
        if (flux.type === "ENTRANT") entrant += flux.valeur;
        else if (flux.type === "SORTANT") sortant += flux.valeur;
    }
    return {entrant, sortant}
}