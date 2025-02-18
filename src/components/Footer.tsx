import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        p: 2,
        textAlign: "center",
        bgcolor: "#333",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        columnGap: "60px",
        width: "100%",
      }}
    >
      <Typography variant="body2">© 2024 CarWorkshop. All rights reserved.</Typography>
      <Typography variant="body2">Complaints: +966 53 631 3392</Typography>
    </Box>
  );
};

export default Footer;
