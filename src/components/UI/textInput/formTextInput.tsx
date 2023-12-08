import { Controller, UseFormRegister, Control } from "react-hook-form";
import { Stack, TextField, Typography } from "@mui/material";

import { TextInputProps } from "./textInput";
export interface FormTextInputProps extends TextInputProps {
  name: string;
  label?: string;
  errorMessage?: string;
  control: Control<any, any>;
  register: UseFormRegister<any>;
}
export const FormTextInput = ({
  name,
  label,
  errorMessage,
  control,
  register,
}: FormTextInputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <Stack textAlign="left">
          <TextField
            label={label}
            error={!!errorMessage}
            {...register(name, {
              required: `${label} is reauired!`,
            })}
          />
          {errorMessage && (
            <Typography variant="subtitle1" p={0} color="red">
              {errorMessage}
            </Typography>
          )}
        </Stack>
      )}
    />
  );
};
