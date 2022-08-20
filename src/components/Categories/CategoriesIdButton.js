import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { BACKGROUND_COLOR } from "../../constants/data";
import { getPanelId } from "../../state/actions/panel";

function CategoriesIdButton({ panels, setSelectedPanel }) {
  const dispatch = useDispatch();
  const handleClick = ({ country, state, city, category, subCategory }) => {
    setSelectedPanel(subCategory);
    dispatch(getPanelId({ country, state, city, category, subCategory }));
  };
  return (
    <>
      {panels.length > 0
        ? panels.map((panel) => {
            return (
              <Button
                key={panel._id}
                variant="contained"
                //very important to use () =>
                onClick={() => handleClick(panel)}
                sx={{
                  background: BACKGROUND_COLOR,
                  margin: "10px",
                  marginBottom: "20px",
                }}
              >
                {panel.subCategory}
              </Button>
            );
          })
        : "Not Found"}
    </>
  );
}

export default CategoriesIdButton;
