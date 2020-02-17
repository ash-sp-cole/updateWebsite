import React from "react";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({

 

 
}));

export default function SimpleSlide() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(prev => !prev);
  };

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <FormControlLabel
          control={<Switch checked={checked} onMouseEnter={handleChange} />}
          label="Show"
        />
        <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
          <Paper elevation={4} className={classes.paper}>
            <svg className={classes.svg}>
              <polygon
                points="0,100 50,00, 100,100"
                className={classes.polygon}
              />
            </svg>
          </Paper>
        </Slide>
      </div>
    </div>
  );
}