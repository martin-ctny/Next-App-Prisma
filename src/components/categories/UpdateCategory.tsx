"use client";

import CategoriesService from "@/service/categories.service";
import { ICategoryForm } from "@/types/index";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

const UpdateCategory = ({
  formValues,
  id,
}: {
  formValues: ICategoryForm;
  id: string;
}) => {
  const router = useRouter();

  const handleClick = async () => {
    try {
      const response = await CategoriesService.UpdateCategory(id, formValues);
      console.log(response.data);
      router.push("/categories");
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

export default UpdateCategory;
