import "./form-fields.scss";
import { TextField } from "@mui/material";

export default function InputSmall({ label = "Add Label" }) {
  return (
    <TextField
      className="custom-input custom-input--small"
      label={label}
      autoComplete="off"
      type="number"
      min="0"
    />
  );
}
