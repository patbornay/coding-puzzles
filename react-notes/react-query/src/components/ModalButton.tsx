import { Box, Button, Modal } from "@mui/material";
import { useState } from "react";
import styles from './ModalButton.module.css';

export const ModalButton = ({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>{name}</Button>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal">
        <Box className={styles['box']}>{children}</Box>
      </Modal>
    </div>
  );
};
