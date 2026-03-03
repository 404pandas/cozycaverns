import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background:
          "radial-gradient(circle at 30% 40%, rgba(92,107,192,0.25), transparent 60%), radial-gradient(circle at 70% 60%, rgba(161,136,127,0.2), transparent 60%)",
        px: 3,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h1" fontSize="4rem" gutterBottom>
          Welcome to CozyCaverns
        </Typography>

        <Typography variant="h6" color="text.secondary" mb={4}>
          Warm finds from deep within the earth.
        </Typography>
        <Link to="/products" style={{ textDecoration: "none" }}>
          <Button variant="contained" size="large">
            Explore Collection
          </Button>
        </Link>
      </motion.div>
    </Box>
  );
}
