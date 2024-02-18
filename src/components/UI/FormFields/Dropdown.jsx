import "./form-fields.scss";
import { Autocomplete, InputAdornment, TextField } from "@mui/material";
import { ReactComponent as DropdownIcon } from "../../../assets/icons/dropdown-arrow.svg";

export default function Dropdown({ label }) {
  const dropdownOptions = [
    { label: "Radni Dan" },
    { label: "Godišnji Odmor" },
    { label: "Plaćeni Dopust" },
    { label: "Bolovanje" },
    { label: "Preraspodjela" },
    { label: "Neradni Dan" },
  ];

  return (
    <Autocomplete
      className="custom-input custom-input--dropdown"
      options={dropdownOptions}
      disableClearable
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <InputAdornment position="end">
                <DropdownIcon />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
}
