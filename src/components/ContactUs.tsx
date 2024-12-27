import { Box, Typography } from "@mui/material";

const ContactUs = () => {
  return (
    <Box
      id="contact-us"
      component="section"
      sx={{
        padding: "5rem 0", // Converted 80px to rem
      }}
    >
      <Box
        sx={{
          maxWidth: "90rem", // Converted 1440px to rem
          width: "95%",
          margin: "0 auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Responsive layout
          justifyContent: "space-between",
          alignItems: "center",
          gap: "2rem", // Added spacing for smaller screens
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2.5rem", // Converted 40px to rem
            maxWidth: { xs: "100%", md: "35%" }, // Adjust width for smaller screens
          }}
        >
          <Box sx={{ color: "#fff", textAlign: "start" }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Inter",
                fontSize: "2.5rem", // Already in rem
                fontStyle: "normal",
                fontWeight: 800,
                lineHeight: "normal",
                textTransform: "uppercase",
                marginBottom: "1.625rem", // Already in rem
                textShadow: "2px 2px 0.625rem rgba(0, 0, 0, 0.5)", // Converted 10px to rem
              }}
            >
              We’d Love to Hear From You!
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Inter",
                fontSize: "1rem", // Already in rem
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "1.625rem", // Already in rem
                textShadow: "1px 1px 0.3125rem rgba(0, 0, 0, 0.4)", // Converted 5px to rem
              }}
            >
              Whether you have questions, feedback, or just want to connect,
              feel free to reach out to us.
            </Typography>
          </Box>
          <Box>
            <a
              href="https://wa.me/+966535343673"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
              }}
            >
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0.75rem 1.5rem", // Converted px to rem
                  backgroundColor: "#25D366",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "1rem",
                  borderRadius: "0.5rem", // Converted 8px to rem
                  boxShadow: "0px 0.25rem 0.375rem rgba(0, 0, 0, 0.1)", // Converted 4px and 6px to rem
                  cursor: "pointer",
                  transition: "transform 0.2s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                Message Us on WhatsApp
              </Box>
            </a>
          </Box>
        </Box>

        <Box
          sx={{
            border: "0.125rem solid rgba(255, 255, 255, 0.2)", // Converted 2px to rem
            borderRadius: "0.5rem", // Converted 8px to rem
            overflow: "hidden",
            width: "100%",
            maxWidth: "37.5rem", // Converted 600px to rem
            height: "18.75rem", // Converted 300px to rem
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.048798422131!2d50.19918800000001!3d26.260079599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49c3001b4c8ad3%3A0xcbfc638e3c2293d1!2z2YjYsdi02Kkg2KfZhNiz2YrYp9ix2Kkg2KfZhNiz2LnZitiv2Ycg2YTYtdmK2KfZhtipINin2YTYs9mK2KfYsdin2Ko!5e0!3m2!1sen!2seg!4v1735314109340!5m2!1sen!2seg"
            style={{
              border: 0,
              width: "100%",
              height: "100%",
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;
