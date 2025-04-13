
import { useState } from 'react';
import classes from './chicken.module.scss';



export const Chicken = () => {
    return (
        <div >
            <img src={window.location+"Happymrschicken.webp"} className={classes.Chicken}/>    
        </div>
    )
}

const images: string[] = [
    "EGG.png",
    "EGGCRACK.png",
    "EGGOPEN.png",
    "EGGCHICK.png",
    "CHICK.png",
]

export const Egg = () => {
    const [hatchState, setHatchStage] = useState(0);
        for (let hatching = 0; hatching < 4; hatching++)
            setTimeout(()=>{setHatchStage(hatchState+1)},500);
    return (
        <div>
           <img src={ hatchState < 4 ? window.location+images[hatchState] : window.location+"CHICK.png"} className={hatchState < 4 ? classes.Egg : classes.Chick} />
        </div>
    )
}


