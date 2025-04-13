import useSound from 'use-sound';
import musicfile from '../../JMC.wav';
import { useChickenContext } from '../../chicken-context';
import classes from './music.module.scss';
import { useEffect } from 'react';

export const Music = () => {
    const {musicState, setMusicState} = useChickenContext();
    const [_, {sound}] = useSound(musicfile, {volume: 0.15, loop: true});
    function playSound() {sound?.play();} 
    useEffect(()=>{
        musicState === 'ON' ? playSound(): sound?.stop()
      },[musicState])
    return (
        <div className={classes.Music} onClick={(e)=>{musicState == 'ON' ? setMusicState('OFF') : setMusicState('ON'); e.stopPropagation()}}>Music: {musicState}</div>
    )
}

