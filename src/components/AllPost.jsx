import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getData } from "../services/apidata";
import SinglePost from "./SinglePost";
import "./styles/allpost.css"

const AllPost = () => {
  const {
    isLoading,
    data: list,
    error,
  } = useQuery({
    queryKey: ["tableData"],
    queryFn: getData,
  });

  // console.log(x.status);
  if (isLoading) return "loading";

  return (
    <div className="allpost">
      {list.map((list) => (
        <SinglePost list={list} key={list.id} />
      ))}
    </div>
  );
};

export default AllPost;
