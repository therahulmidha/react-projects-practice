import {
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import React, { useState } from "react";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import { styled } from "@mui/material/styles";
import DialogContent from "@mui/material/DialogContent";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export const ImageResults = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState("");
  const [currentImgTitle, setCurrentImgTitle] = useState("");

  const handleClickOpen = (src, title) => (e) => {
    setCurrentImg(src);
    setCurrentImgTitle(title);
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  let imageListContent = null;
  let dialogContent = (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={isOpen}
    >
      <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        {currentImgTitle}
      </BootstrapDialogTitle>
      <DialogContent dividers>
        <img src={currentImg} alt={currentImgTitle} width="100%" height="100%"/>
      </DialogContent>
    </BootstrapDialog>
  );
  if (images) {
    imageListContent = (
      <ImageList sx={{ width: 800, height: 450 }} cols={4} rowHeight={164}>
        {images.map((image, index) => (
          <ImageListItem key={index}>
            <img src={image.largeImageURL} alt={image.tags} loading="lazy" />
            <ImageListItemBar
              title={image.tags}
              subtitle={image.user}
              actionIcon={
                <IconButton
                  sx={{ color: "white" }}
                  aria-label={`info about ${image.tags}`}
                  onClick={handleClickOpen(image.largeImageURL, image.tags)}
                >
                  <ZoomInIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    );
  }
  return (
    <>
      {imageListContent}
      {dialogContent}
    </>
  );
};
