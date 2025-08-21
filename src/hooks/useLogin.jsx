import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { login } from "../api/auth/login";

const useLogin = () => {
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: (body) => login(body),
    onError: (err) => {
      console.error("❌ Login error:", err);
      toast.error("Failed to login");
    },
    onSuccess: (res) => {
      toast.success("Redirecting...");

      const role = res?.data?.role;
      const selectedCourse = res?.data?.selected_course;

      if (role === "admin") {
        return navigate("/admin/overview");
      }

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
    onSubmit: (values) => {
      mutate(values);
    },
  });

  return {
    formik,
    isPending,
  };
};

export default useLogin;
