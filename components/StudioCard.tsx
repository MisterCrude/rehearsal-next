import AspectRatioOutlinedIcon from "@mui/icons-material/AspectRatioOutlined";
import DomainOutlinedIcon from "@mui/icons-material/DomainOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import RouteIcon from "@mui/icons-material/Route";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useState } from "react";

import { Studio } from "@/resources/dto/studio";

interface StudioCard {
  studio: Studio;
}

export default function StudioCard({ studio }: StudioCard) {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => {
    setShowDetails((prev) => !prev);
  };

  const { title, image, link, address, district, services, distance } = studio;

  return (
    <Box>
      <Card>
        <Box
          sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}
        >
          <CardMedia
            title={image?.title}
            sx={{ display: "flex", flexBasis: 200 }}
          >
            <div
              style={{ position: "relative", width: "100%", height: "100%" }}
            >
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
            <Typography
              component="a"
              variant="h5"
              href={link}
              target="_blank"
              sx={{ display: "block" }}
            >
              {title}
              <OpenInNewIcon
                sx={{
                  marginLeft: 1,
                  marginBottom: -0.5,
                }}
              />
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
              <Button
                size="small"
                onClick={handleShowDetails}
                endIcon={<ExpandMoreIcon />}
              >
                Zobacz salki
              </Button>
            </Box>
          </CardContent>
        </Box>

        {/* Collapsed */}
        <Collapse unmountOnExit in={showDetails}>
          <Divider />

          <Paper
            elevation={1}
            sx={{
              padding: 2,
              backgroundColor: "grey.100",
              borderTopRightRadius: 0,
              borderTopLeftRadius: 0,
            }}
          >
            <Stack
              spacing={1}
              direction="row"
              sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}
            >
              <Typography>Red room:</Typography>
              <Chip
                icon={<AspectRatioOutlinedIcon />}
                label={"34m2"}
                variant="outlined"
                size="small"
                sx={{ paddingLeft: 0.5 }}
              />
              <Chip
                icon={<PeopleOutlinedIcon />}
                label={"3-4 osoby"}
                variant="outlined"
                size="small"
                sx={{ paddingLeft: 0.5 }}
              />
            </Stack>
            <Stack
              spacing={1}
              direction="row"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Typography>Red room:</Typography>
              <Chip
                icon={<AspectRatioOutlinedIcon />}
                label={"34m2"}
                variant="outlined"
                size="small"
                sx={{ paddingLeft: 0.5 }}
              />
              <Chip
                icon={<PeopleOutlinedIcon />}
                label={"3-4 osoby"}
                variant="outlined"
                size="small"
                sx={{ paddingLeft: 0.5 }}
              />
            </Stack>
          </Paper>
        </Collapse>
      </Card>
    </Box>
  );
}
