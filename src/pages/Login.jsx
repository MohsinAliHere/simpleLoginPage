import React, { useState } from "react";
import {
    Grid,
    Stack,
    Typography,
    TextField,
    Container,
} from "@mui/material";
import LoginImg from "./loginImg.png";
import { editableInputTypes } from "@testing-library/user-event/dist/utils";
const Login = () => {

    const [Form, setForm] = useState({
        email: "",
        password: "",
    })


    const getInpVal = (e) => {
        const { id, value } = e.target
        setForm({
            ...Form,
            [id]: value
        })
    }
    const submit = () => {
        console.log(Form)
    }

    return (
        <Container>
            <Grid
                container
                direction="row"
                alignItems="center"
                justifyContent="space-around"
                height="100vh"
            >
                <Grid item xs={10} sm={6} md={5} lg={4}>
                    <Stack>
                        <img src={LoginImg} />
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={8} md={4} lg={4}>
                    <Stack direction="column" spacing={2}>
                        <Typography variant="h4" className="fw-bold txt">
                            Member Login
                        </Typography>
                        <TextField type="text" id="email" onChange={(e) => getInpVal(e)} value={Form.email} placeholder="Email address" />
                        <TextField type="password" id="password" onChange={(e) => getInpVal(e)} value={Form.password} placeholder="Password" />
                        <button onClick={submit} variant="contained">Login</button>
                        <Typography  variant="body2" >Forget Username/Password</Typography>
                    </Stack>
                </Grid>
            </Grid>
            <Typography  className="txt" variant="caption" >Design For A Tech Sight</Typography>
        </Container>
    );
};

export default Login;
