import {
  Button,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useForm, FieldValues } from "react-hook-form";
import { Link } from "react-router-dom";

type FormInputs = {
  username: string;
  password: string;
};
export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const formSubmit = async (filedValues: FormInputs) => {
    localStorage.setItem("username", filedValues.username);
  };
  return (
    <form
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onSubmit={handleSubmit(formSubmit)}
    >
      <Stack
        spacing={4}
        maxWidth="400px"
        width={"400px"}
        p={4}
        style={{ border: "solid 1px #666666", borderRadius: 8 }}
      >
        <Typography variant="h4">Login</Typography>
        <Divider />
        <Stack textAlign="left">
          <TextField
            label="Username"
            error={!!errors.username}
            {...register("username", {
              required: "Username is reauired!",
            })}
            name="username"
          ></TextField>
          {errors.username && (
            <Typography variant="subtitle1" p={0} color="red">
              {errors.username.message}
            </Typography>
          )}
        </Stack>
        <Stack textAlign="left">
          <TextField
            label="Password"
            type="password"
            error={!!errors.password}
            {...register("password", { required: "Password is reauired!" })}
            name="password"
          ></TextField>
          {errors.password && (
            <Typography color="red">{errors.password.message}</Typography>
          )}
        </Stack>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Button variant="contained" fullWidth type="submit">
              Login
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button variant="text" fullWidth>
              <Link style={{ width: "100%" }} to="/register">
                Register
              </Link>
            </Button>
          </Grid>
        </Grid>
      </Stack>
    </form>
  );
};
