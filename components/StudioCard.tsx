import { Studio } from "@/dto/studio";
import DomainOutlinedIcon from "@mui/icons-material/DomainOutlined";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import Box from "@mui/material/Box";
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
  const { title, image, link, address, district, services } = studio;

  return (
    <CardActionArea component="a" href={link} target="_blank">
      <Card sx={{ display: "flex" }}>
        <CardMedia
          title={image?.title}
          sx={{ display: "flex", flexBasis: 200 }}
        >
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            {image && (
              <Image
                fill
                priority
                sizes="auto"
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
          <Chip
            icon={<DomainOutlinedIcon />}
            label={district.name}
            size="small"
            sx={{ my: 1, paddingLeft: 0.7, paddingRight: 0.3 }}
            variant="outlined"
          />

          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            sx={{ marginBottom: 2, alignItems: "center", display: "flex" }}
          >
            <RoomOutlinedIcon sx={{ mr: 0.5 }} /> {address}
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Stack direction="row" spacing={1}>
              {services?.map((service) => (
                <Chip
                  key={service.id}
                  label={service.name}
                  color="primary"
                  size="small"
                  sx={{ paddingX: 0.6 }}
                />
              ))}
            </Stack>

            <Typography variant="subtitle1" color="primary" align="right">
              Sprawź{" "}
              <OpenInNewIcon sx={{ fontSize: "inherit", marginBottom: -0.2 }} />
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </CardActionArea>
  );
}
