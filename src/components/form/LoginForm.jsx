import { useState } from "react";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  // const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert("Registration ebrhasil!");
    }, 2000);
  };

  return (
    <div className="flex-1 bg-secondary flex items-center justify-center p-8">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-semibold text-white mb-2">Login</h2>
        <p className="text-white mb-8">
          Build your career with MindForge!
          <br />
          Let's Achieve our Goals Together!
        </p>

        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-6 py-4 bg-transparent bg-opacity-50 border border-white/30 rounded-md text-white outline-none"
                required
              />
            </div>

            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-6 py-4 bg-transparent bg-opacity-50 border border-white/30 rounded-md text-white outline-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-accent text-primary px-6 py-4 rounded-md font-semibold hover:bg-yellow-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Logging In..." : "Login"}
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
