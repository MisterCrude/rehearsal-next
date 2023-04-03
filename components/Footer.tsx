import { BRAND_NAME, BRAND_URL } from "@/constants";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href={BRAND_URL} target="_blank">
        {BRAND_NAME}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

interface FooterProps {
  title: string;
  description?: string;
}

export default function Footer(props: FooterProps) {
  const { description, title } = props;

  return (
    <Box component="footer" sx={{ bgcolor: "background.paper", py: 6 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h6"
          align="center"
          sx={{ fontWeight: "bold", textAlign: "center", mb: 2 }}
        >
          {title}
        </Typography>
        {description && (
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
          >
            {description}
          </Typography>
        )}
        <Copyright />
      </Container>
    </Box>
  );
}
