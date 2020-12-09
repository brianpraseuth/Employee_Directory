import React from 'react';
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    jumbotron: {
      display:'flex', 
      color: 'white',
      justifyContent:'center',
      textAlign: "center",
      backgroundColor: "#354f52"
  },
});

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.jumbotron}>
            <Container>
                <Typography variant="h2" style={{ margin:"50px" }}>
                    Employee Directory
                </Typography>

            </Container>
        </div>
    )
}
