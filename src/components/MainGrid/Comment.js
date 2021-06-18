import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import { postComment } from "../../redux/actions";

const Comment = ({ id }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState([{ id: id, body: "" }]);
  const createHandler = useCallback(
    (e) => {
      const newComment = [{ id: id, body: e.target.value }];
      setComment(newComment);
    },
    [id]
  );
  const comments = useSelector((state) => state.imageReducer.comments);


  return (
    <>
      <div className="comment">
        <input type="text" placeholder="add comment" onChange={createHandler} />
        <Button
          variant="contained"
          color="default"
          className="btn"
          onClick={() => dispatch(postComment(comment))}
        >
          submit
        </Button>
        {comments.map((item, i) =>
          item.id === id ? <p key={i}>item.body</p> : ""
        )}
      </div>
    </>
  );
};

export default Comment;
