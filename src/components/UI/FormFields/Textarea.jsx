import "./form-fields.scss";
import { TextField } from "@mui/material";

export default function Textarea() {
  return (
    <TextField
      className="custom-input custom-input--textarea"
      label="Kratak opis poslova"
      minRows={2}
      multiline
    />
  );
}
