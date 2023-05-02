import DomainOutlinedIcon from "@mui/icons-material/DomainOutlined";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import RouteIcon from "@mui/icons-material/Route";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";

import { Studio } from "@/resources/dto/studio";

interface StudioCard {
  studio: Studio;
}

export default function StudioCard({ studio }: StudioCard) {
  const { title, image, link, address, district, services, distance } = studio;

  return (
    <CardActionArea component="a" href={link} target="_blank">
      <Card
        sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}
      >
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
            sx={{
              marginBottom: 1,
              display: "flex",
              flexWrap: "wrap",
              lineHeight: 1.4,
            }}
          >
            <Box
              component="span"
              sx={{
                alignItems: "flex-start",
                display: "flex",
                mr: distance ? 1 : 0,
                mb: distance ? 1 : 0,
              }}
            >
              <RoomOutlinedIcon sx={{ mr: 0.5 }} />
              {address}
            </Box>

            <Box
              sx={{ alignItems: "flex-start", display: "flex", mr: 1, mb: 1 }}
            >
              {distance && (
                <>
                  <RouteIcon sx={{ mr: 0.5 }} /> ~{distance} km od Ciebie
                </>
              )}
            </Box>
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", flexWrap: "wrap", marginBottom: -1 }}>
              {services?.map((service) => (
                <Chip
                  key={service.id}
                  label={service.name}
                  color="primary"
                  size="small"
                  sx={{ paddingX: 0.6, marginRight: 1, marginBottom: 1 }}
                />
              ))}
            </Box>

            <Typography
              variant="subtitle1"
              color="primary"
              align="right"
              sx={{ display: { xs: "none", md: "block" } }}
            >
              Sprawź{" "}
              <OpenInNewIcon sx={{ fontSize: "inherit", marginBottom: -0.2 }} />
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </CardActionArea>
  );
}
