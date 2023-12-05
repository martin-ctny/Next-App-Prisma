import CategoriesService from "@/service/categories.service";
import PostsService from "@/service/posts.service";
import { Button } from "../../../node_modules/@mui/material/index";

const DeleteCategory = ({
  id,
  getAllCategories,
}: {
  id: string;
  getAllCategories: () => void;
}) => {
  console.log(id);
  const handleClick = () => {
    DeleteCategory();
  };

  const DeleteCategory = async () => {
    try {
      const response = await CategoriesService.DeleteCategory(id);
      console.log(response.data);
      getAllCategories();
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

export default DeleteCategory;
