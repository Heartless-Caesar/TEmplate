import {
  Box,
  Container,
  Grid,
  Button,
  Item,
  FormControl,
  FormLabel,
  Input
} from "@material-ui/core";

import { useState } from "react";

const AuthForm = () => {
  let [input, setInput] = useState("");
  let [password, setPassword] = useState("");
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="60vh"
      >
        <FormControl>
          <FormLabel htmlFor="my-input">Username:</FormLabel>
          <Input
            id="my-input"
            onChange={(e) => setInput(e.target.value)}
          ></Input>
          <br />
          <FormLabel
            htmlFor="my-password"
            onChange={(e) => setPassword(e.target.value)}
          >
            Password:
          </FormLabel>
          <Input id="my-password" />
          <br />
          <Button type="submit" color="primary" variant="contained">
            Register
          </Button>
        </FormControl>
      </Box>
    </>
  );
};

export default AuthForm;
