import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

import {
  ThemeProvider,
  makeStyles,
  createMuiTheme
} from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import { green } from "@material-ui/core/colors";
import { Button } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: green
  }
});

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing(1)
  }
}));

export default function DatePicker() {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = useState(Date.now());
  const [day, setDay] = useState("");
  const [newDate, setNewDate] = useState(Date.now());
  const handleDateChange = date => {
    setSelectedDate(date);
  };
  const handleDayChange = e => {
    e.preventDefault();
    setDay(e.target.value);
  };
  //  useEffect(()=>{
  // let date = new Date(selectedDate);
  // let newdate = new Date(date);

  // newdate.setDate(newdate.getDate() + day);
  // console.log(date)
  // console.log(newdate)
  // var dd = newdate.getDate();
  // var mm = newdate.getMonth() + 1;
  // var y = newdate.getFullYear();

  // var someFormattedDate = mm + '/' + dd + '/' + y;
  // setNewDate(someFormattedDate) ;
  // console.log(someFormattedDate)

  function addDays() {
    var today = new Date(selectedDate);
    console.log(today)

    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var y = today.getFullYear();
  
    var initalDAte = mm + '/' + dd + '/' + y;
console.log("Initial date",initalDAte)
  
  }

  // var date = new Date(selectedDate);

  //  },[day])

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography
          component="div"
          style={{ backgroundColor: "#cfe8fc", height: "50vh", color: "black" }}
          variant="h5"
        >
          This app let you Know what date a day fall in by providing number of
          day(s) and the starting date
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Pick start date"
              format="MM/dd/yyyy"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date"
              }}
            />
          </MuiPickersUtilsProvider>
          <ThemeProvider theme={theme}>
            <TextField
              className={classes.margin}
              label="Enter Number of Day(s)"
              variant="outlined"
              type="number"
              name="day"
              value={day}
              onChange={handleDayChange}
              id="mui-theme-provider-outlined-input"
            />
          </ThemeProvider>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Pick start date"
              format="MM/dd/yyyy"
              disabled="true"
              value={newDate}
              KeyboardButtonProps={{
                "aria-label": "change date"
              }}
            />
          </MuiPickersUtilsProvider>
          <Button onClick={addDays}>getewe</Button>
        </Typography>
      </Container>
    </React.Fragment>
  );
}
