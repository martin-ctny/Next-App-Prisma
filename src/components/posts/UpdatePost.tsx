"use client";

import PostsService from "@/service/posts.service";
import { IPostForm } from "@/types/index";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

const UpdatePost = ({ formValues, id }: { formValues: IPostForm; id: any }) => {
  const router = useRouter();

  const handleClick = async () => {
    try {
      const response = await PostsService.UpdatePost(id, formValues);
      console.log(response.data);
      router.push("/posts");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button onClick={handleClick} variant="contained">
      Update
    </Button>
  );
};

export default UpdatePost;
