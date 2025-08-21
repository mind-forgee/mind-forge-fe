import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { deleteCourse } from "../api/course/deleteCourse";
import { toast } from "sonner";

const useDeleteCourse = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (courseId) => deleteCourse(courseId),
    onSuccess: () => {
      toast.success("Course deleted successfully");
      queryClient.invalidateQueries(["courses"]);
    },
    onError: (error) => {
      toast.error("Failed to delete course");
      console.error("Failed to delete course:", error);
    },
  });
};

export default useDeleteCourse;
