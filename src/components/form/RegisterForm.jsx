import useRegister from "../../hooks/useRegister";
import FormInput from "../ui/FormInput";

const RegisterForm = () => {
  const { formik, isPending } = useRegister()

  return (
    <div className="flex-1 bg-secondary flex items-center justify-center p-8">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-semibold text-white mb-2">Register Now</h2>
        <p className="text-white mb-8">
          Build your career with MindForge!
          <br />
          Let's Achieve our Goals Together!
        </p>

        <form onSubmit={formik.handleSubmit}>
          <div className="space-y-6">
            <FormInput placeholder="Full Name" name="full_name" onChange={formik.handleChange} value={formik.values.full_name} />
            <FormInput placeholder="Email" type="email" name="email" onChange={formik.handleChange} value={formik.values.email} />
            <FormInput placeholder="password" name="password" onChange={formik.handleChange} type="password" value={formik.values.password} />


            <button
              type="submit"
              disabled={isPending}
              className="w-full bg-accent text-primary px-6 py-4 rounded-md font-semibold hover:bg-yellow-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isPending ? "Registering..." : "Register"}
            </button>
          </div>
        </form>


        <p className="text-center text-white mt-6">
          Already have an Account?{" "}
          <a href="/login" className="text-white hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
