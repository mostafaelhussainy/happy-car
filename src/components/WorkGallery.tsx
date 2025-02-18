import { Box, Grid, Typography } from "@mui/material";

import WorkshopImg1 from "../assets/workshop (1).jpeg";
import WorkshopImg2 from "../assets/workshop (2).jpeg";
import WorkshopImg3 from "../assets/workshop (3).jpeg";
import WorkshopImg4 from "../assets/workshop (4).jpeg";
import WorkshopImg5 from "../assets/workshop (5).jpeg";
import WorkshopImg6 from "../assets/workshop (6).jpeg";
import WorkshopImg7 from "../assets/workshop (7).jpeg";
import WorkshopImg11 from "../assets/workshop (11).jpeg";
import WorkshopImg12 from "../assets/workshop (12).jpeg";
import WorkshopImg14 from "../assets/workshop (14).jpeg";
import WorkshopImg15 from "../assets/workshop (15).jpeg";
import WorkshopImg16 from "../assets/workshop (16).jpeg";

const WorkGallery = () => {
  const imagesGallery = [
    WorkshopImg1,
    WorkshopImg2,
    WorkshopImg3,
    WorkshopImg4,
    WorkshopImg5,
    WorkshopImg6,
    WorkshopImg7,
    WorkshopImg11,
    WorkshopImg12,
    WorkshopImg14,
    WorkshopImg15,
    WorkshopImg16,
  ];

  return (
    <Box
      id="our-company"
      sx={{
        maxWidth: "90rem", // max width converted to rem (1440px => 90rem)
        width: "95%",
        margin: "0 auto",
        padding: "5rem 0", // padding converted to rem (80px => 5rem)
      }}
      component="section"
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontFamily: "Inter",
          fontSize: "2.5rem", // font size converted to rem (40px => 2.5rem)
          fontStyle: "normal",
          fontWeight: 800,
          lineHeight: "normal",
          textTransform: "uppercase",
          marginBottom: "2.5rem", // margin bottom converted to rem (40px => 2.5rem)
          textShadow: "0.125rem 0.125rem 0.625rem rgba(0, 0, 0, 0.5)", // text shadow converted to rem (10px => 0.625rem)
          color: "#FFF",
        }}
      >
        Our company
      </Typography>

      <Grid container spacing={2}>
        {imagesGallery.map((item, idx) => (
          <Grid
            key={idx}
            item
            xs={12} // 1 column on extra small screens
            sm={6} // 2 columns on small screens
            md={4} // 3 columns on medium screens
            lg={3} // 4 columns on large screens
          >
            <Box
              component="img"
              src={item}
              alt={`Image ${idx + 1}`}
              sx={{
                width: "100%",
                height: "auto",
                minHeight: "500px",
                borderRadius: "1rem", // border radius converted to rem
                objectFit: "cover", // ensures image fills the container without stretching
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WorkGallery;
