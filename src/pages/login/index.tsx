import { Button, Divider, Grid, Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FormTextInput } from "../../components/UI";

type FormInputs = {
  username: string;
  password: string;
};
export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
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
        <FormTextInput
          name="username"
          label="Username"
          errorMessage={errors.username && errors.username.message}
          control={control}
          register={register}
        />
        <FormTextInput
          name="password"
          label="Password"
          errorMessage={errors.password && errors.password.message}
          control={control}
          register={register}
        />

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
