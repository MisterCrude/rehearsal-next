import { Studio } from "@/dto/studio";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
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
  const { title, image, link, address } = studio;

  return (
    <CardActionArea component="a" href={link}>
      <Card sx={{ display: "flex" }}>
        <CardMedia
          title={image?.title}
          sx={{ display: "flex", flexBasis: 200 }}
        >
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

          <Stack direction="row" spacing={1} sx={{ mt: 2, mb: 2 }}>
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

          <Typography variant="subtitle1" color="primary" align="right">
            Zprawź <OpenInNewIcon sx={{ fontSize: "inherit", mb: -0.2 }} />
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
}
