import FormInput from "./FormInput";
import useLogin from "../../hooks/useLogin";

const LoginForm = () => {
  const { formik, isPending } = useLogin()
  return (
    <div className="flex-1 bg-secondary flex items-center justify-center p-8">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-semibold text-white mb-2">Login</h2>
        <p className="text-white mb-8">
          Build your career with MindForge!
          <br />
          Let's Achieve our Goals Together!
        </p>

        <form onSubmit={formik.handleSubmit}>
          <div className="space-y-6">
            <FormInput name="email" onChange={formik.handleChange} value={formik.values.email} placeholder="Email" />
            <FormInput name="password" onChange={formik.handleChange} value={formik.values.password} placeholder="Password" type="password" />

            <button
              type="submit"
              disabled={isPending}
              className="w-full bg-accent text-primary px-6 py-4 rounded-md font-semibold hover:bg-yellow-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isPending ? "Logging In..." : "Login"}
            </button>
          </div>
        </form>


        <p className="text-center text-white mt-6">
          Don't have an Account?{" "}
          <a href="/register" className="text-white hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
