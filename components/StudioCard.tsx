import { Studio } from "@/dto/studio";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";

interface StudioCard {
  studio: Studio;
}

export default function StudioCard({ studio }: StudioCard) {
  const { title, image, description, link, email, phone, address } = studio;

  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia title={image?.title} sx={{ display: "flex", flexBasis: 200 }}>
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          {image && (
            <Image
              fill
              alt={image.title}
              src={image.url}
              style={{ objectFit: "cover" }}
            />
          )}
        </div>
      </CardMedia>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {address}
          </Typography>

          <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
            <Chip
              label="Sala prob"
              color="primary"
              size="small"
              sx={{ paddingX: 0.6 }}
            />
            <Chip
              label="Nagrania"
              color="primary"
              size="small"
              sx={{ paddingX: 0.6 }}
            />
            <Chip
              label="Miksing"
              color="primary"
              size="small"
              sx={{ paddingX: 0.6 }}
            />
            <Chip
              label="Mastering"
              color="primary"
              size="small"
              sx={{ paddingX: 0.6 }}
            />
          </Stack>
        </CardContent>

        <CardActions>
          <Button
            target="_blank"
            size="small"
            href={link}
            startIcon={<OpenInNewIcon />}
          >
            Zprawź
          </Button>
        </CardActions>

        {/* {richTextToComponents(description)} */}
        {/* <Image fill alt={image.title} src={image.url} /> */}
      </Box>
    </Card>
  );
}
