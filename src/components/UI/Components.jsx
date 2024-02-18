import Button from "./Button/Button";
import { ReactComponent as InformationIcon } from "../../assets/icons/information-circle.svg";
import { ReactComponent as AddIcon } from "../../assets/icons/add.svg";
import { ReactComponent as Logout } from "../../assets/icons/logout.svg";
import InputSmall from "./FormFields/InputSmall";
import Dropdown from "./FormFields/Dropdown";
import Textarea from "./FormFields/Textarea";
import { TextField } from "@mui/material";
import Date from "./FormFields/Date";

export default function Components() {
  return (
    <div className="components">
      <h1>Components</h1>
      <code>Form Field - Small</code>
      <div className="components__inline">
        <InputSmall label="Sati" />
        <InputSmall label="Duži Label" />
      </div>
      <code>Form Field - Dropdown</code>
      <div className="components__inline">
        <Dropdown label="Tip dana" />
      </div>
      <code>Form Field - Textarea</code>
      <div className="components__inline">
        <Textarea label="Tip dana" />
      </div>
      <TextField
        className="custom-input custom-input--textarea"
        label="Sa ograničenim redovima"
        minRows={2}
        maxRows={3}
        multiline
      />
      <div className="components__inline">
        <TextField
          className="custom-input custom-input--textarea"
          label="Error state"
          minRows={2}
          maxRows={3}
          multiline
          error
        />
      </div>
      <code>Form Field - Date</code>
      <div className="components__inline">
        <Date />
      </div>
      <code>Button - Default</code>
      <div className="components__inline">
        <Button label="POŠALJI NA ODOBRENJE" />
        <Button color="warn" label="POŠALJI NA ODOBRENJE" />
        <Button color="success" label="POŠALJI NA ODOBRENJE" />
        <Button color="success" label="POŠALJI NA ODOBRENJE" disabled />
      </div>
      <code>Button - Large</code>
      <div className="components__inline">
        <Button variant="lg" label="PRIJAVI SE" />
        <Button color="warn" variant="lg" label="PRIJAVI SE" />
        <Button color="success" variant="lg" label="PRIJAVI SE" />
      </div>
      <code>Button - FAB</code>
      <div className="components__inline">
        <Button variant="fab" icon={<InformationIcon />} />
      </div>
      <code>Button - Icon</code>
      <div className="components__inline">
        <Button variant="icon" color="primary" icon={<AddIcon />} />
        <Button variant="icon" color="warn" icon={<AddIcon />} />
        <Button variant="icon" color="success" icon={<AddIcon />} />
        <Button variant="icon" color="accent" icon={<AddIcon />} />
      </div>
      <code>Button - Text</code>
      <div className="components__inline">
        <Button
          variant="text"
          color="primary"
          icon={<Logout />}
          label="Odjava"
        />
        <Button variant="text" color="warn" icon={<Logout />} label="Odjava" />
        <Button
          variant="text"
          color="success"
          icon={<Logout />}
          label="Odjava"
        />
      </div>
    </div>
  );
}
