import LoginForm from "../components/form/LoginForm";


const LoginLayout = () => {
  return (
    <div className="min-h-screen md:flex">
      <div className="flex-1 bg-login bg-no-repeat bg-cover bg-center">
        <div className="max-w-4xl h-full text-white bg-dark/70 px-14 py-16 leading-10">
          <div className="text-5xl flex flex-col gap-y-4 font-semibold mb-4 leading-tight">
            <h1>Welcome Back to MindForge!</h1>
          </div>
          <p className="text-light text-lg">
            Pick up where you left off — your next skill, project, <br /> or career move is just a login away.
          </p>
        </div>
      </div>
      <LoginForm />
    </div>
  );
};

export default LoginLayout;
