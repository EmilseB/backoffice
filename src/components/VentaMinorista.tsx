import React, { FC } from "react";
import { YoutubeCopy } from "./ejerciciogaby/YoutubeCopy";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

export const Ventaminorista: FC = () => {
  const items = [
    {
      image: "https://i.ytimg.com/vi/faQjQhranjE/maxresdefault.jpg",
      imageAvatar:
        "https://img.europapress.es/fotoweb/fotonoticia_20150331134913-15031252329_420.jpg",
      title:
        "creando accesorioscreando accesorioscreando accesorioscreando accesorioscreando accesorioscreando accesorioscreando accesorios",
      userName: "Zafira",
      views: 450.45,
      numberDate: 22,
      userVerify: true,
    },
    {
      image: "https://i.ytimg.com/vi/faQjQhranjE/maxresdefault.jpg",
      imageAvatar:
        "https://img.europapress.es/fotoweb/fotonoticia_20150331134913-15031252329_420.jpg",
      title:
        "creando accesorioscreando accesorioscreando accesorioscreando accesorioscreando accesorioscreando accesorioscreando accesorios",
      userName: "Zafira",
      views: 450.45,
      numberDate: 22,
      userVerify: true,
    },
    {
      image: "https://i.ytimg.com/vi/faQjQhranjE/maxresdefault.jpg",
      imageAvatar:
        "https://img.europapress.es/fotoweb/fotonoticia_20150331134913-15031252329_420.jpg",
      title:
        "creando accesorioscreando accesorioscreando accesorioscreando accesorioscreando accesorioscreando accesorioscreando accesorios",
      userName: "Zafira",
      views: 450.45,
      numberDate: 22,
      userVerify: true,
    },
    {
      image: "https://i.ytimg.com/vi/faQjQhranjE/maxresdefault.jpg",
      imageAvatar:
        "https://img.europapress.es/fotoweb/fotonoticia_20150331134913-15031252329_420.jpg",
      title:
        "creando accesorioscreando accesorioscreando accesorioscreando accesorioscreando accesorioscreando accesorioscreando accesorios",
      userName: "Zafira",
      views: 450.45,
      numberDate: 22,
      userVerify: true,
    },
    {
      image: "https://i.ytimg.com/vi/faQjQhranjE/maxresdefault.jpg",
      imageAvatar:
        "https://img.europapress.es/fotoweb/fotonoticia_20150331134913-15031252329_420.jpg",
      title:
        "creando accesorioscreando accesorioscreando accesorioscreando accesorioscreando accesorioscreando accesorioscreando accesorios",
      userName: "Zafira",
      views: 450.45,
      numberDate: 22,
      userVerify: true,
    },
    {
      image: "https://i.ytimg.com/vi/faQjQhranjE/maxresdefault.jpg",
      imageAvatar:
        "https://img.europapress.es/fotoweb/fotonoticia_20150331134913-15031252329_420.jpg",
      title:
        "creando accesorioscreando accesorioscreando accesorioscreando accesorioscreando accesorioscreando accesorioscreando accesorios",
      userName: "Zafira",
      views: 450.45,
      numberDate: 22,
      userVerify: true,
    },
    {
      image: "https://i.ytimg.com/vi/faQjQhranjE/maxresdefault.jpg",
      imageAvatar:
        "https://img.europapress.es/fotoweb/fotonoticia_20150331134913-15031252329_420.jpg",
      title:
        "creando accesorioscreando accesorioscreando accesorioscreando accesorioscreando accesorioscreando accesorioscreando accesorios",
      userName: "Zafira",
      views: 450.45,
      numberDate: 22,
      userVerify: true,
    },
    {
      image: "https://i.ytimg.com/vi/faQjQhranjE/maxresdefault.jpg",
      imageAvatar:
        "https://img.europapress.es/fotoweb/fotonoticia_20150331134913-15031252329_420.jpg",
      title:
        "creando accesorioscreando accesorioscreando accesorioscreando accesorioscreando accesorioscreando accesorioscreando accesorios",
      userName: "Zafira",
      views: 450.45,
      numberDate: 22,
      userVerify: true,
    },
  ];

  return (
    <>
      <Grid xs={12}>
        <Grid item xs={3}>
          {items.map(
            ({ image, imageAvatar, title, userName, views, numberDate }) => (
              <YoutubeCopy
                image={image}
                imageAvatar={imageAvatar}
                title={title}
                userName={userName}
                views={views}
                numberDate={numberDate}
                userVerify
              />
            )
          )}
        </Grid>
      </Grid>
    </>
  );
};
