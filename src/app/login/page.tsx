import { LoginForm } from "@/features/login-form/ui";
import { Box, Container, Paper, Typography } from "@mui/material";

const LoginPage = () => {
    return (
        <Container
            maxWidth="sm"
            sx={{ mt: 8, alignItems: "center", justifyContent: "center" }}
        >
            <Paper
                elevation={3}
                sx={{
                    md: { width: 1 },
                    p: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography
                    component="h1"
                    variant="h4"
                    sx={{ mb: 2, fontWeight: "bold" }}
                >
                    Authentication Page
                </Typography>
                <Typography
                    component="p"
                    variant="subtitle1"
                    sx={{ mb: 4, color: "text.secondary" }}
                >
                    Please log in to continue.
                </Typography>

                <Box sx={{ width: "100%" }}>
                    <LoginForm />
                </Box>
            </Paper>
        </Container>
    );
};

export default LoginPage;
