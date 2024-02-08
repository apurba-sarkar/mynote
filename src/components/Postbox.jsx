import { Button } from "antd";
import { Typography } from "antd";
import "./styles/postbox.css";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { postData } from "../services/apidata";
import toast from "react-hot-toast";

// _____________imports____________

const { Title } = Typography;
const Postbox = () => {
  const queryClient = useQueryClient();
  const [wordCount, setWordCount] = useState(300);
  const [form, setForm] = useState([]);

  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();

  const { mutate, isLoading } = useMutation({
    mutationFn: postData,
    onSuccess: () => {
      toast.success("new note added succesfully!");
      queryClient.invalidateQueries({
        queryKey: ["tableData"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  // console.log(currentDate, currentTime);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setForm({
      ...form,
      [name]: value,
      wordCount: 301 - wordCount,
      date: currentDate,
      time: currentTime,
      fav: false,
    });

    const inputValue = e.target.value;
    let count = String(inputValue).length;
    setWordCount(300 - count);
    // console.log(wordCount);
  };
  const handleSubmit = () => {
    if (wordCount == 300) return toast.error("can not add empty note");
    mutate(form);
    // setForm((form.desc.value = ""));
    setForm("")
    console.log(form.desc);
  };

  return (
    <form>
      <div className="postbox-main">
        <Typography>
          <Title level={2} className="title-select">
            My Note
          </Title>
        </Typography>

        <div>
          <div className="postbox-setcount">
            <textarea
              className="desc"
              name="desc"
              placeholder="start writing here..."
              value={form.desc}
              onChange={handleInput}
            ></textarea>
          </div>
          <div className="toolbox">
            <div className="ins">
              {wordCount > 0 ? "Remaing" : "Overwrite"} {wordCount} words
            </div>
            {wordCount > -1 ? (
              <Button type="primary" onClick={handleSubmit}>
                Post
              </Button>
            ) : (
              <span className="warning">* word Exceed</span>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export default Postbox;
