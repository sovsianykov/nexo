import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchFull, fetchSmall } from "../../redux/actions";
import ImageHolder from "./ImageHolder";
import "./style.scss";

const MainGrid = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSmall());
    dispatch(fetchFull());
  }, [dispatch]);
  const list = useSelector((state) => state.imageReducer.smallSize);
  return (
    <div className="main_grid">
      <Grid container spacing={1}>
        {list &&
          list.map((cell) => (
            <Grid item xs={12} md={4} sm={4} key={cell.id}>
              <ImageHolder url={cell.url} id={cell.id} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default MainGrid;
