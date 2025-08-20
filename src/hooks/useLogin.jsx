import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import { toast } from "sonner";
import { Navigate, useNavigate } from "react-router-dom";
import { login } from "../api/auth/login";

const useLogin = () => {
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: (body) => login(body),
    onError: (err) => {
      console.log(err);
      toast.error("Failed to login");
    },
    onSuccess: (res) => {
      toast.success("Redirecting...");

      const selectedCourse = res?.data?.selected_course;

      if (selectedCourse) {
        return navigate("/dashboard/course");
      }
      return navigate("/select-course");
    },
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (value) => {
      mutate(value);
    },
  });

  return {
    formik,
    isPending,
  };
};

export default useLogin;
