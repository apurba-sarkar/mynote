import ".//styles/singlepost.css";
import { useMutation } from "@tanstack/react-query";
import { deleteData } from "../services/apidata";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const SinglePost = ({ list }) => {
  const { id: dataId, name, desc, date, time, wordCount } = list;

  const queryClient = useQueryClient();
  // console.log(wordCount);
  const { isLoading, mutate } = useMutation({
    mutationFn: (id) => deleteData(id),
    onSuccess: () => {
      toast.success(` Note no: ${dataId} deleted succesfully!`);
      queryClient.invalidateQueries({
        queryKey: ["tableData"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return (
    <div>
      <div className="singlepost">
        <div className="singlepost-container">
          <div>
            <div className="noteid"> Note no : {dataId} </div>
          </div>
          <div className="singlepost-desc"> {desc}</div>
          <div className="posttime">
            posted at: {date} {time}
          </div>
          <div className="single-postend">
            <div className="wc">word Count : {wordCount}</div>
            <button className="fav" onClick={() => mutate(dataId)}>
              {" "}
              <span className="star">❌</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
