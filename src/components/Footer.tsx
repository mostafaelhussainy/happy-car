import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ p: 2, textAlign: "center", bgcolor: "#333", color: "#fff" }}>
      <Typography variant="body2">
        © 2024 CarWorkshop. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
