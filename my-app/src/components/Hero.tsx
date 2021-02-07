import {useState} from 'react'
import './Home.css';

export default function Hero(props: any): JSX.Element {
    let [heroBtn, setHeroBtn] = useState(false)

    let {heroName, heroAge, heroPower, heroImeg}:any = props
    
    function heroBtnFunction (){
        setHeroBtn(heroState => !heroState)
    }
    return (
        
        <div id = "heroDivId">
            
            <img src={heroImeg} />
            <button onClick = {heroBtnFunction}>Click</button>
            {heroBtn ?
            <div id = "toggelDivOn">
            <h3>Name: <span className = "heroSpan">{heroName}</span></h3>
            <h3>Age: <span className = "heroSpan">{heroAge}</span></h3>
            <h3>My Powers: <span className = "heroSpan">{heroPower}</span></h3>
            </div>
                :
            <div id = "toggelDivOf">
                <h3>Click the button for informetion</h3>
            </div>
            }
        </div>
    )
}
