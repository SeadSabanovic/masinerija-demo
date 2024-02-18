import { DatePicker } from "@mui/x-date-pickers";
import { ReactComponent as CalendarIcon } from "../../../assets/icons/calendar.svg";
import { useState } from "react";

export default function Date() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <DatePicker
      open={open}
      onAccept={() => setOpen(false)}
      onClose={() => setOpen(false)}
      className="custom-input custom-input--date"
      label="Početak rada"
      slots={{
        inputAdornment: () => (
          <CalendarIcon
            className="custom-input__calendar-toggle"
            onClick={handleToggle}
          />
        ),
      }}
    />
  );
}
