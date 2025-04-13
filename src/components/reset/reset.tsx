import { useChickenContext } from '../../chicken-context';
import classes from './reset.module.scss';

export const Reset = () => {
    const {setChickenLocations, setEggLocations, setCount} = useChickenContext();
    return (
        <div className={classes.Reset} onClick={()=>{setChickenLocations([]); setEggLocations([]); setCount(0);}}>RESET</div>
    )
}