// src/pages/Contact.tsx
import { Box, Typography, Button } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const Contact = () => {
  return (
    <Box
      sx={{
        px: { xs: 3, md: 8 },
        py: 10,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
      }}
    >
      <Typography variant="h2" gutterBottom>
        Contact Cozy Caverns
      </Typography>

      <Typography variant="body1" paragraph>
        For inquiries, custom orders, or just to say hello, reach out directly
        through Etsy.
      </Typography>

      <Button
        variant="contained"
        color="secondary"
        href="https://www.etsy.com/messages/new?with_id=35684254&referring_id=16721931&recipient_id=35684254"
        target="_blank"
        rel="noopener noreferrer"
        endIcon={<OpenInNewIcon />}
        sx={{
          px: 4,
          py: 2,
          fontSize: "1.2rem",
          background: "linear-gradient(145deg, #5C6BC0, #0078B7)",
          boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
          "&:hover": {
            background: "linear-gradient(145deg, #0078B7, #5C6BC0)",
          },
        }}
      >
        Contact via Etsy
      </Button>
    </Box>
  );
};

export default Contact;
