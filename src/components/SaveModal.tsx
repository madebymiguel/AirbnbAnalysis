import React, { useState } from "react";
import { css } from "linaria";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/router";
import { SpreadSheet } from "../types/SpreadSheet";

const modalContainer = css`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
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

export interface SaveModalProps {
  spreadSheetData: SpreadSheet;
}

export default function SaveModal({ spreadSheetData }: SaveModalProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userInput = new FormData(event.currentTarget);
    const submissionData = {
      name: userInput.get("name"),
      address: userInput.get("address"),
      city: userInput.get("city"),
      state: userInput.get("state"),
      zipcode: userInput.get("zipcode"),
      spreadSheetData,
    };

    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submissionData),
    });

    const returnMessage = await res.json();

    if (returnMessage.error) {
      router.push("/login");
    } else {
      router.push("/dashboard");
    }
  };

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
          <Box
            component="form"
            onSubmit={handleSubmit}
            className={modalContainer}
          >
            <TextField
              className={input}
              id="name"
              label="Save Name"
            ></TextField>
            <TextField
              className={input}
              id="address"
              label="Address"
            ></TextField>
            <TextField className={input} id="city" label="City"></TextField>
            <TextField className={input} id="state" label="State"></TextField>
            <TextField
              className={input}
              id="zipcode"
              label="Zipcode"
            ></TextField>
            <div className={buttonContainer}>
              <Button type="submit" variant="text">
                Save
              </Button>
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
