import React from "react";
import { Grid, Box, Typography, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import BaseGridList from "@/modules/shared/BaseGridList";
import BaseCard from "@/modules/shared/BaseCard";
import BaseImage from "@/modules/shared/BaseImage";
import NextLink from "@/modules/shared/NextLink";
import BaseSeo from "@/modules/seo/BaseSeo";

const useStyles = makeStyles((theme) => ({
  card: {
    "&:hover": {
      "& $mask": {
        opacity: 0.4,
      },
      "& $titleTypography": {
        border: "4px solid currentColor",
      },
    },
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  mask: {
    backgroundColor: theme.palette.common.black,
    opacity: 0.6,
    transition: theme.transitions.create("opacity"),
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.common.white,
  },
  titleTypography: {
    padding: theme.spacing(2),
  },
}));

const homeLinks = [
  {
    title: "Personajes",
    to: "/characters",
    image: "/images/characters.jpg",
  },
  {
    title: "Episodios",
    to: "/episodes",
    image: "/images/episodes.jpg",
  },
  {
    title: "Ubicaciones",
    to: "/locations",
    image: "/images/locations.jpg",
  },
];

function HomeView() {
  const classes = useStyles();

  return (
    <>
      <BaseSeo title="Home" />
      <BaseGridList
        items={homeLinks}
        spacing={2}
        renderItem={(homeLink) => (
          <Grid key={homeLink.to} item xs={12} sm={4}>
            <NextLink href={homeLink.to}>
              <BaseCard className={classes.card} hasActionArea>
                <BaseImage
                  src={homeLink.image}
                  alt={homeLink.title}
                  aspectRatio="16:9"
                />
                <div className={clsx(classes.overlay, classes.mask)} />
                <div className={clsx(classes.overlay, classes.title)}>
                  <Typography className={classes.titleTypography} variant="h5">
                    {homeLink.title}
                  </Typography>
                </div>
              </BaseCard>
            </NextLink>
          </Grid>
        )}
      />
      <Box my={1}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <BaseImage
              src="/gifs/home01.webp"
              alt="rick gif"
              aspectRatio="16:9"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <BaseImage
              src="/gifs/home02.gif"
              alt="snuffles"
              aspectRatio="16:9"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default HomeView;
