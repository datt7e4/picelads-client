import React from "react";
import { Alert, Collapse, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { CLEAR_ERROR } from "../../constants/errorTypes";

function Error({ error, setDis }) {
  const dispatch = useDispatch();
  const [openAlert, setOpenAlert] = useState(true);
  return (
    <Collapse in={openAlert}>
      <Alert
        severity="error"
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setOpenAlert(false);
              //only setDisable if found
              if (setDis) setDis(false);
              dispatch({ type: CLEAR_ERROR });
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ mb: 2 }}
      >
        {`${error} Close to retry.`}
      </Alert>
    </Collapse>
  );
}

export default Error;
