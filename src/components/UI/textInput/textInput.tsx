import { Stack, TextField, Typography } from "@mui/material";
export interface TextInputProps {
  name?: string;
  label?: string;
  errorMessage?: string;
}
export const TextInput = ({ name, label, errorMessage }: TextInputProps) => {
  return (
    <Stack textAlign="left">
      <TextField label={label} error={!!errorMessage} name={name}></TextField>
      {errorMessage && (
        <Typography variant="subtitle1" p={0} color="red">
          {errorMessage}
        </Typography>
      )}
    </Stack>
  );
};
