import { Box, Link } from "@mui/material";
import Logo from "../assets/logo.png";

const Header = () => {
  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Box
      component="nav"
      sx={{
        position: "fixed",
        background: "rgba(0, 0, 0, 0.50)",
        width: "100%",
        padding: "0.625rem 0", // 10px = 0.625rem
        zIndex: 1000,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "90rem", // 1440px = 90rem
          width: "95%",
          margin: "0 auto",
        }}
      >
        {/* Logo with scroll-to-top functionality */}
        <Link
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          sx={{
            fontFamily: "Inter",
            fontSize: "1.25rem", // 20px = 1.25rem
            fontStyle: "normal",
            lineHeight: "normal",
            color: "#FFF",
            textShadow: "2px 2px 0.625rem rgba(0, 0, 0, 0.5)", // 10px = 0.625rem
            textDecoration: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "0.3125rem", // 5px = 0.3125rem
          }}
        >
          <img src={Logo} alt="Car workshop logo" width="80px" />
          Car workshop
        </Link>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {" "}
          {/* 16px = 1rem */}
          <Link
            onClick={() => handleScrollToSection("our-company")}
            sx={{
              fontFamily: "Inter",
              fontSize: "0.875rem", // 14px = 0.875rem
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "1.25rem", // 20px = 1.25rem
              color: "#FFF",
              textShadow: "2px 2px 0.625rem rgba(0, 0, 0, 0.5)", // 10px = 0.625rem
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            Our company
          </Link>
          <Link
            onClick={() => handleScrollToSection("contact-us")}
            sx={{
              fontFamily: "Inter",
              fontSize: "0.875rem", // 14px = 0.875rem
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "1.25rem", // 20px = 1.25rem
              color: "#FFF",
              textShadow: "2px 2px 0.625rem rgba(0, 0, 0, 0.5)", // 10px = 0.625rem
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            Contact us
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
