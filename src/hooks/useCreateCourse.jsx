/* eslint-disable no-unused-vars */
import { useMutation } from "@tanstack/react-query";
import { createCourse } from "../api/course/createCourse";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const useCreateCourse = () => {
  const navigate = useNavigate();
  const { mutate: handleGetCourse, isPending } = useMutation({
    mutationFn: (body) => createCourse(body),

    onError: (err) => {
      console.log(err);
      toast.error("Failed to create course");
    },
    onSuccess: (res) => {
      toast.success("Redirecting...");
      return navigate("/dashboard");
    },
  });

  return {
    handleGetCourse,
    isPending,
  };
};

export default useCreateCourse;
