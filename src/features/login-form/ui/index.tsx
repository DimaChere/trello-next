"use client";
import { Box, Button, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { LoginFormResolver, LoginType } from "../model/schema";

export const LoginForm = () => {
    const {
        control,
        handleSubmit,
        formState: { isValid },
    } = useForm<LoginType>({ resolver: LoginFormResolver });

    const onSubmit = () => {
        console.log("submit");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box
                sx={{
                    width: "100%",
                    flexDirection: "column",
                    display: "flex",
                    gap: 2,
                }}
            >
                <Controller
                    control={control}
                    name="name"
                    render={({
                        field: { onBlur, value, onChange },
                        fieldState: { error },
                    }) => (
                        <TextField
                            title="Name"
                            placeholder="Enter your name"
                            value={value}
                            onBlur={onBlur}
                            onChange={onChange}
                            error={!!error}
                            helperText={error?.message}
                            sx={{ width: "100%" }}
                        />
                    )}
                ></Controller>
                <Button
                    type="submit"
                    disabled={!isValid}
                    variant="contained"
                    color="primary"
                >
                    Register
                </Button>
            </Box>
        </form>
    );
};
