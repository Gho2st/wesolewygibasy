import classes from './H1.module.css'

export default function H1(props){
    return(
        <h1 className={classes.header}>{props.text}</h1>
    )
}