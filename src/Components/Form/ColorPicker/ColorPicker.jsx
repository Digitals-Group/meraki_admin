import React from "react";
import { Controller } from "react-hook-form";
import { ColorPicker, HexAlphaColorPicker } from "react-colorful";
// import "react-colorful/dist/index.css"; // Import the CSS file

const ColorPickerWithHex = ({ control, name }) => {
  return (
    <div>
      <Controller
        name={name}
        control={control}
        defaultValue="#000"
        render={({ field }) => (
          <div>
            <HexAlphaColorPicker
              color={field.value}
              onChange={(color) => field.onChange(color)}
            />
            <input
              type="text"
              value={field.value}
              onChange={(e) => field.onChange(e.target.value)}
            />
          </div>
        )}
      />
    </div>
  );
};

export default ColorPickerWithHex;
