import React from "react";
import { Controller } from "react-hook-form";
import { Input, type InputProps } from "../Input";

type Props = InputProps & {
  name: string;
  control: any; // any pq a tipagem da lib é muito dinâmica
};

export function ControlledInput({ name, control, ...rest }: Props) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Input value={value} onChangeText={onChange} {...rest} />
      )}
    />
  );
}
