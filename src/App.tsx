import {
  Button,
  Grid,
  TextField,
  Container,
  Alert,
  Snackbar,
} from "@mui/material";
import React, { useState, useRef } from "react";

import DiceOne from "./dice/one";
import DiceTwo from "./dice/Two";
import DiceThree from "./dice/three";
import DiceFourth from "./dice/Fourth";
import DiceFifth from "./dice/Fifth";
import DiceSixth from "./dice/Sixth";

function App() {
  const [diceResult, setDiceResult] = useState<number[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);

  const rollDice = () => {
    const numDice: number = Number(inputRef?.current?.value ?? 0);
    if (numDice < 1 || numDice > 99) {
      setOpen(true);
      return;
    }
    const diceRollingResults: number[] = [];

    for (var i = 0; i < numDice; i++) {
      // Generate a random number between 1 and 6 (inclusive) for each dice
      var diceRoll = Math.floor(Math.random() * 6) + 1;
      diceRollingResults.push(diceRoll);
    }
    setDiceResult(diceRollingResults);
  };

  return (
    <div className="App">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <label>Number of Dice</label>
          </Grid>
          <Grid item xs={12}>
            <TextField
              className="TextFieldStyle"
              id="outlined-basic"
              type="number"
              variant="outlined"
              inputRef={inputRef}
              size="small"
            />{" "}
          </Grid>
          <Grid item xs={12} paddingBottom={8}>
            <Button
              className="ButtonStyle"
              variant="contained"
              onClick={rollDice}
            >
              Roll
            </Button>
          </Grid>
          {diceResult.map((dice, index) => {
            let DiceComponent;

            switch (dice) {
              case 1:
                DiceComponent = DiceOne;
                break;

              case 2:
                DiceComponent = DiceTwo;
                break;

              case 3:
                DiceComponent = DiceThree;
                break;

              case 4:
                DiceComponent = DiceFourth;
                break;

              case 5:
                DiceComponent = DiceFifth;
                break;

              case 6:
                DiceComponent = DiceSixth;
                break;
            }
            return (
              DiceComponent && (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={4}
                  xl={4}
                  key={index}
                  justifyContent="center"
                  alignItems={"center"}
                >
                  <DiceComponent />
                </Grid>
              )
            );
          })}

          {/* Content for the first part */}
          <Snackbar
            open={open}
            autoHideDuration={2000}
            onClose={() => setOpen(false)}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Alert severity="error" sx={{ width: "100%" }}>
              write a number between 1 and 99 please!
            </Alert>
          </Snackbar>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
