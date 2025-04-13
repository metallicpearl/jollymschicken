import { useState } from 'react'
import { Count } from './components/count/count'
import classes from './App.module.scss'
import { Chicken, Egg} from './components/chicken/chicken'
import useSound from 'use-sound';
import fart1 from './frt-1.wav';
import fart2 from './frt-2.wav';
import { ChickenContext } from './chicken-context';
import { Music } from './components/music/music';
import { Location } from './types';
import { Reset } from './components/reset/reset';
import { ReturnLocationArray } from './functions';

function App() {
  document.body.style.overflow = "hidden";
  const [count, setCount] = useState(0);
  const [chickenLocations, setChickenLocations] : [Location[] | undefined, React.Dispatch<React.SetStateAction<Location[] | undefined>>] = useState();
  const [eggLocations, setEggLocations] : [Location[] | undefined, React.Dispatch<React.SetStateAction<Location[] | undefined>>] = useState();
  const [nextFart, setNextFart] = useState(fart2)
  const [musicState, setMusicState]  = useState('OFF');
  const [playFart] = useSound(nextFart);

  return (
    <ChickenContext.Provider value={
      {count, setCount, nextFart, setNextFart, musicState, setMusicState, chickenLocations, setChickenLocations, eggLocations, setEggLocations}
    }>
    <div className={classes.App} >
    <div className={classes.Toolbar} onClick={(e)=>{e.stopPropagation()}}>
      <div className={classes.Title}>JOLLY MS CHICKEN</div>
      <div className={classes.ResetCountMusic}>
      <Music />
      <Reset />
      <Count count={count}></Count>
      </div>
      </div>
      <div
      className={classes.Content} onClick={(click)=>{setChickenLocations(ReturnLocationArray(chickenLocations!, {x: click.clientX, y: click.clientY})); setEggLocations(ReturnLocationArray(eggLocations!, {x: click.clientX, y: click.clientY}));
      setCount(count+1);
   
      nextFart == fart2 ? setNextFart(fart1) : setNextFart(fart2);
      playFart();
     
      

 
      }}>
        {chickenLocations?.map((location,i) => {
        return (
        <div key={i}>
        <div style={{position:"relative", left: location.x, top: location.y}}><Chicken /></div>
        <div style={{position:"relative", left: location.x, top: location.y}}><Egg /></div>
        </div>
        )
    })}
      <div className={classes.Footer}>
      </div>
      </div>
    </div> 
    </ChickenContext.Provider>
    

  )
}

export default App
