export const outline = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "10px",
  padding: "10px 2px",
};

//Sign In and Form container
export const signinContainer = {
  maxHeight: "80vh",
  "@media(max-width: 900px)": {
    width: "60vw",
  },
  "@media(max-width: 700px)": {
    width: "80vw",
  },
  "@media(max-width: 500px)": {
    width: "90vw",
  },
  width: "500px",
  overflow: "auto",
  bgcolor: "background.paper",
  borderRadius: "10px",
};

export const viewContainer = {
  maxHeight: "80vh",
  "@media(min-width: 1000px)": {
    width: "900px",
  },
  width: "90vw",
  bgcolor: "background.paper",
  overflow: "auto",
  borderRadius: "10px",
  padding: 1,
};
