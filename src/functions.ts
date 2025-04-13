import { Location } from "./types";

export function ReturnLocationArray (oldArray: Location[] | undefined, newObject: Location) {
    let newArray: Location[];
    if (oldArray != undefined) 
    {newArray = [...oldArray!, newObject];}
    else 
    {newArray = [newObject]}
    return newArray;
    return [...oldArray!, newObject];
  }