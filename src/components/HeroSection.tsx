import { Box, Typography } from "@mui/material";
import WorkshopImg9 from "../assets/workshop-hero.jpeg";

const HeroSection = () => {
  return (
    <Box
      component="section"
      sx={{
        height: "80vh",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        backgroundImage: `url(${WorkshopImg9})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box sx={{ maxWidth: "1440px", width: "95%", margin: "0 auto" }}>
        <Box
          sx={{
            color: "#fff",
            maxWidth: { lg: "35%", xs: "100%" },
            textAlign: "start",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Inter",
              fontSize: "2.5rem",
              fontStyle: "normal",
              fontWeight: 800,
              lineHeight: "normal",
              textTransform: "uppercase",
              marginBottom: "1.625rem",
              textShadow: "2px 2px 10px rgba(0, 0, 0, 0.5)",
            }}
          >
            Your Trusted
            <br />
            Car Workshop
            <br />
            in Al Khobar
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Inter",
              fontSize: "1rem",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "1.625rem",
              textShadow: "1px 1px 5px rgba(0, 0, 0, 0.4)",
            }}
          >
            Providing premium maintenance services at 8713 Makkah Al Mukarramah
            St, Sinayiat Al Thuqba, Al Khobar. We're here to keep your car in
            top condition.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
