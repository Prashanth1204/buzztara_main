import React from "react";
import "./index.css";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    button: {
      display: 'inline',
      fontSize : "20px",
      fontWeight:"bolder",
      marginLeft : "1180px",
      marginTop : "-24px",
      marginBottom : "-20px"
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));

function Up() {
    const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div style={{margin:"0 30px",backgroundColor:"whitesmoke"}}>
    <div className="up">
    <p style={{marginBottom : "-20px"}}>80 Devices </p>
    <Button className={classes.button} onClick={handleOpen}>
    &#8942;
      </Button>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label" style={{display:"none"}}>Action</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
          style={{display:"none"}}
        >
          
          <MenuItem value={10} style={{marginLeft : "1140px"}}>Upload Json</MenuItem>
          <MenuItem value={20} style={{marginLeft : "1140px"}}>Download CSV</MenuItem>
        </Select>
      </FormControl>
    </div>
    </div>
  );
}

export default Up;
