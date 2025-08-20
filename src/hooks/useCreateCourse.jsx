/* eslint-disable no-unused-vars */
import { useMutation } from "@tanstack/react-query";
import { createCourse } from "../api/course/createCourse";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const useCreateCourse = () => {
  const navigate = useNavigate();
  const { mutate: handleGetCourse, isPending } = useMutation({
    mutationFn: (body) => createCourse(body),
    onSuccess: (res) => {
      toast.success("Redirecting...");
      console.log(res);
      return navigate("/dashboard/course");
    },
    onError: (err) => {
      console.log(err);
      toast.error("Failed to create course");
    },
  });

  return {
    handleGetCourse,
    isPending,
  };
};

export default useCreateCourse;
