import React, { useState } from "react";
import { css } from "linaria";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const modalContainer = css`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 200px;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
`;

const input = css`
  padding-bottom: 8px;
`;

const buttonContainer = css`
  display: flex;
  flex-direction: row;
  margin: 0px;
  width: 100%;
  justify-content: flex-end;
  padding: 4px;
`;

export default function SaveModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant="contained">
        Save
      </Button>
      <Modal
        aria-labelledby="save-modal-title"
        aria-describedby="save-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box className={modalContainer}>
            <TextField className={input} label="Name"></TextField>
            <TextField className={input} label="Address"></TextField>
            <div className={buttonContainer}>
              <Button variant="text">Save</Button>
              <Button onClick={handleClose} variant="contained">
                Cancel
              </Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
