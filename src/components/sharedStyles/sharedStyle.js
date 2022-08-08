export const boxStyle = {
  "@media (hover: none)": {
    display: "none",
  },
  //for devices that cannot detected hover from above @media
  "@media only screen and (max-device-width: 450px)": {
    display: "none",
  },
  position: "absolute",
  top: -250,
  left: 535,
  zIndex: 1,
  p: 1,
  width: 450,
  height: 150,
};
export const boxStyleFixed = {
  "@media (hover: none)": {
    display: "none",
  },
  //for devices that cannot detected hover from above @media
  "@media only screen and (max-device-width: 450px)": {
    display: "none",
  },
  position: "fixed",
  top: 0,
  right: 0,
  zIndex: 1,
  p: 1,
  width: 450,
  height: 150,
};
