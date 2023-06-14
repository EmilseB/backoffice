import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React, { FC, useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import { Box, Grid, MenuItem, Tooltip } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface YoutubeCopoProps {
  image: string;
  imageAvatar: string;
  title: string;
  userName: string;
  views: number;
  numberDate: number;
  userVerify?: boolean;
}
const Options = ["favoritos", "ver mas tarde", "ocultar"];

export const YoutubeCopy: FC<YoutubeCopoProps> = ({
  image,
  imageAvatar,
  title,
  userName,
  views,
  numberDate,
  userVerify,
}) => {
  const [open, SetOpen] = useState<boolean>(false);

  const handleClick = () => {
    SetOpen(true);
  };

  const handleClose = () => {
    SetOpen(false);
  };

  return (
    <Box sx={{ height: "322px", width: "359px" }}>
      <div>
        <img
          src={image}
          style={{
            height: "202px",
            width: "359px",
            borderRadius: "10px",
            marginBottom: 2,
          }}
        />
      </div>
      <Stack direction="row" spacing={2} alignItems="initial" width="359px">
        <Avatar
          src={imageAvatar}
          sx={{ height: 36, width: 36, position: "relative", top: 5 }}
        />

        <Stack direction="column" sx={{ flex: 2 }}>
          <Tooltip title={title}>
            <Typography
              fontSize="16px"
              color="#F1F1F1"
              overflow="hidden"
              text-overflow="ellipsis"
              white-space="normal"
              
              sx={{
                flex: 1,
                width: 251,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                fontWeight: 600
              }}
            >
              {title}
            </Typography>
          </Tooltip>
          <Tooltip title={userName}>
            <Typography color="#AAAAAA" fontSize="14px">
              <Stack direction={"row"} alignItems={"center"}>
                {userName}
                {userVerify && (
                  <CheckCircleIcon sx={{ width: 14, height: 14, ml: 0.5 }} />
                )}
              </Stack>
            </Typography>
          </Tooltip>
          <Stack direction="row">
            <Typography color="#AAAAAA" fontSize="14px">
              {views} vistas • Hace {numberDate} Horas
            </Typography>
          </Stack>
        </Stack>

        <IconButton onClick={handleClick} disableRipple>
          <MoreVertIcon
            sx={{
              height: 24,
              width: 24,
              color: "#F1F1F1",
              position: "relative",
              top: -20,
            }}
          />
        </IconButton>
        <Menu open={open} onClose={handleClose}>
          {Options.map((option) => (
            <MenuItem>{option}</MenuItem>
          ))}
        </Menu>
      </Stack>
    </Box>
  );
};
