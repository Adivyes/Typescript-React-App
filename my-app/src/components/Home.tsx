import React from 'react'
import CounterFor from './Counter/CounterFor'
import Hero from './Hero';

export default function Home(): JSX.Element {
    return (
        <div id="homeDivId">
      <CounterFor/>
      <div className = "heroDivIdOfApp">
      <Hero heroName ="Yuji Itadori" heroAge ={17} heroPower = "Demon Soul" heroImeg = './imges/jujutsu kaisen.gif'/>
      <Hero heroName ="Shigeo Kageyama" heroAge ={13} heroPower = "Telekinesis" heroImeg = './imges/mob psycho.gif'/>
      <Hero heroName ="Asta" heroAge ={15} heroPower = "Magic Book" heroImeg = './imges/Asta black clover.gif'/>
      </div>

      <div className = "heroDivIdOfApp">
      <Hero heroName ="Shinra Kusakabe" heroAge ={18} heroPower = "Blazing Legs" heroImeg = './imges/Shinra Kusakabe.gif'/>
      <Hero heroName ="Monkey D. Luffy" heroAge ={17} heroPower = "Rubber powers" heroImeg = './imges/Monkey D. Luffy.gif'/>
      <Hero heroName ="Saitama" heroAge ={27} heroPower = "One Punch Man" heroImeg = './imges/Saitama.gif'/>
      </div>
        </div>
    )
}
