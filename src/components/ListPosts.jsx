import React, { useEffect } from "react";
import { useDispatch, pstSelector } from "react-redux";
import { addposts, getposts } from "../redux/postsSlice";
import { getuser } from "../redux/userSlice";

export default function Listposts() {
  const dispatch = useDispatch();
  const Listposts = pstSelector((state) => state.posts.data).map(
    (item) => item.name.common
  );
  const selectedpst = pstSelector((state) => state.posts.selectedposts);

  useEffect(() => {
    dispatch(getposts());
    dispatch(getuser());
  }, [dispatch]);
  return (
    <div>
      <select
        value={selectedpst}
        onChange={(e) => dispatch(addposts(e.target.value))}
      >
        {Listposts.map((item,index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
    </div>
  );
}