import { createContext, useContext} from 'react';
import { Location } from './types';

export type ChickenContext = {
    count: number | undefined,
    setCount: React.Dispatch<React.SetStateAction<number>>,
    nextFart: string | undefined, 
    setNextFart: React.Dispatch<React.SetStateAction<string>>
    musicState: string | undefined,
    setMusicState:  React.Dispatch<React.SetStateAction<string>>
    chickenLocations: Location[] | undefined
    setChickenLocations: React.Dispatch<React.SetStateAction<Location[] | undefined>>
    eggLocations: Location[] | undefined
    setEggLocations: React.Dispatch<React.SetStateAction<Location[] | undefined>>
}

export const ChickenContext = createContext<ChickenContext>(undefined!);

export function useChickenContext() {
   const chickenContext = useContext(ChickenContext)
   if (chickenContext === undefined)
   {
    throw new Error("Chicken context must be used with the chicken context provider.")
   }
   return chickenContext;
}
