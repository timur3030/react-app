import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/Loader";

function PostIdPage() {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });
  const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
    const response = await PostService.getCommentsById(id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
  }, []);

  return (
    <div>
      <h1>Вы открыли страницу поста № {params.id}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div style={{ marginTop: 10 }}>
          {post.id}. {post.title}
        </div>
      )}
      <h2 style={{ marginTop: 30 }}>Комментарии</h2>
      {isComLoading ? (
        <Loader />
      ) : (
        <div>
          {comments.map((comm) => (
            <div style={{ marginTop: 15 }} key={comm.email}>
              <h3>{comm.email}</h3>
              <div>{comm.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PostIdPage;
