import React from 'react'
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    searchArea: {
      display:'flex', 
      color: 'white',
      justifyContent:'center',
      textAlign: "center",
      backgroundColor: "#cad2c5",
  },
});

export default function Search(props) {
    const classes = useStyles();

    return (
        <div className={classes.searchArea}>
            <form style={{margin: "20px"}}>
                <br></br>
                <Button size="small" variant="outlined" style={{marginBottom: "0"}} onClick={props.handleSort}>Sort Alphabetically</Button>
            </form>
        </div>
    )
}
