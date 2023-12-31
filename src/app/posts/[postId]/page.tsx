"use client";

import UpdatePost from "@/components/posts/UpdatePost";
import PostsService from "@/service/posts.service";
import { IPost, IPostForm } from "@/types/index";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";

const PostSinglePage = ({
  params,
  searchQuery,
}: {
  params: {
    postId: string;
  };
  searchQuery: {
    q: string;
  };
}) => {
  const [post, setPost] = useState<IPost | null>(null);
  const [formValues, setFormValues] = useState<IPostForm>({
    title: "",
    content: "",
  });

  useEffect(() => {
    console.log(params.postId);
    getOnePost();
  }, [params]);

  const getOnePost = async () => {
    try {
      const response = await PostsService.GetPost(params.postId);
      setPost(response.data);
      setFormValues({
        title: response.data.title,
        content: response.data.content,
      });

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form submitted with values:", formValues);
  };

  return (
    <div>
      <h1>Post Single Page {params.postId}</h1>
      {post && (
        <form onSubmit={handleSubmit}>
          <div>
            <TextField
              label="Title"
              variant="outlined"
              fullWidth
              name="title"
              value={formValues.title}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <TextField
              label="Content"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              name="content"
              value={formValues.content}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <UpdatePost formValues={formValues} id={params.postId} />
          </div>
        </form>
      )}
    </div>
  );
};

export default PostSinglePage;
