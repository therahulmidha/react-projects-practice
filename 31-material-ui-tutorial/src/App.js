import { Button, ButtonGroup, Checkbox } from "@mui/material";
import "./App.css";
import { Delete, Save } from "@mui/icons-material";
import { useState } from "react";

function CheckboxExample() {
  const [checked, setChecked] = useState(true);
  return <Checkbox checked={checked} />;
}
function App() {
  return (
    <div>
      <ButtonGroup variant="contained">
        <Button
          startIcon={<Save />}
          size="large"
          style={{
            fontSize: 24,
          }}
          color="primary"
        >
          Save
        </Button>
        <Button
          endIcon={<Delete />}
          size="large"
          style={{
            fontSize: 24,
          }}
          color="secondary"
        >
          Discard
        </Button>
      </ButtonGroup>

      <CheckboxExample />
    </div>
  );
}

export default App;
