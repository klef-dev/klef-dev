import React, { ChangeEvent } from "react";

type ToggleType = {
  toggled?: boolean;
  onToggle?: any;
};

const Toggle = ({ toggled, onToggle }: ToggleType) => {
  const handleToggle = (event: ChangeEvent<HTMLInputElement>) => {
    onToggle(event.target.checked);
  };
  return (
    <>
      <label className="switch">
        <input checked={toggled} onChange={handleToggle} type="checkbox" />
        <span className=" slider"></span>
      </label>
    </>
  );
};

export default Toggle;
