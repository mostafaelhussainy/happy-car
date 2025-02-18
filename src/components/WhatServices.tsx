import { Container, Grid, Typography, Card, CardMedia, CardContent, Button, Box } from "@mui/material";
import CarInspections from "../assets/fig1.png";
import CustomMechanics from "../assets/fig2.png";
import OilNBrakeNInspections from "../assets/fig3.png";

const WhatServices = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Header Section */}
      <Box textAlign="center" mb={4}>
        <Typography variant="h2" component="h2" sx={{ fontSize: 28 }}>
          What Service Do You Need?
        </Typography>
        <Typography variant="h4" component="h4" sx={{ fontSize: 18, color: "#555" }}>
          It's a great place to share your story so that clients get to know you better. Try editing by clicking on this
          text.
        </Typography>
      </Box>

      {/* Three Image Cards */}
      <Grid container spacing={4}>
        {/* Card 1 */}
        <Grid item xs={12} md={4}>
          <Card sx={{ textAlign: "center", p: 2, boxShadow: "none", backgroundColor: "transparent" }}>
            <CardMedia
              component="img"
              image={CustomMechanics}
              alt="Custom Mechanics"
              sx={{
                width: "100px",
                height: "auto",
                margin: "0 auto",
                objectFit: "contain",
              }}
            />
            <CardContent>
              <Typography variant="h5" component="h3" sx={{ fontSize: 18, mb: 1 }}>
                Custom Mechanics
              </Typography>
              <Typography variant="body2" sx={{ fontSize: 14, color: "#555" }}>
                This is a text paragraph. Please click here to add or edit this text. Just double-click on this sentence
                to add your content and make changes.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 2 */}
        <Grid item xs={12} md={4}>
          <Card sx={{ textAlign: "center", p: 2, boxShadow: "none", backgroundColor: "transparent" }}>
            <CardMedia
              component="img"
              image={CarInspections}
              alt="Car Inspections"
              sx={{
                width: "100px",
                height: "auto",
                margin: "0 auto",
                objectFit: "contain",
              }}
            />
            <CardContent>
              <Typography variant="h5" component="h3" sx={{ fontSize: 18, mb: 1 }}>
                Car Inspections
              </Typography>
              <Typography variant="body2" sx={{ fontSize: 14, color: "#555", mb: 2 }}>
                Bodywork and painting for all types of car accidents and brands.
              </Typography>
              <a
                href="https://wa.me/+966536313392"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="contained" color="primary">
                  Book Now
                </Button>
              </a>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 3 */}
        <Grid item xs={12} md={4}>
          <Card sx={{ textAlign: "center", p: 2, boxShadow: "none", backgroundColor: "transparent" }}>
            <CardMedia
              component="img"
              image={OilNBrakeNInspections}
              alt="Oil & Brake Inspections"
              sx={{
                width: "100px",
                height: "auto",
                margin: "0 auto",
                objectFit: "contain",
              }}
            />
            <CardContent>
              <Typography variant="h5" component="h3" sx={{ fontSize: 18, mb: 1 }}>
                Oil & Brake Inspections
              </Typography>
              <Typography variant="body2" sx={{ fontSize: 14, color: "#555" }}>
                This is a text paragraph. Please click here to add or edit this text. Just double-click on this sentence
                to add your content and make changes.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WhatServices;
