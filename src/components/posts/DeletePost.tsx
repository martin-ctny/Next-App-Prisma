import PostsService from "@/service/posts.service";
import { Button } from "../../../node_modules/@mui/material/index";

const DeletePost = ({
  id,
  getAllPosts,
}: {
  id: string;
  getAllPosts: () => void;
}) => {
  console.log(id);
  const handleClick = () => {
    deletePost();
  };

  const deletePost = async () => {
    try {
      const response = await PostsService.DeletePost(id);
      console.log(response.data);
      getAllPosts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button variant="contained" color="error" onClick={() => handleClick()}>
      Delete
    </Button>
  );
};

export default DeletePost;
