import classes from './count.module.scss';

export const Count = ({count}:{count: number}) => {
    return (

    <div className={classes.Count}> 
        {count}
    </div>
)
}