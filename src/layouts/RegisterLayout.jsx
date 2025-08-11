import RegisterForm from "../components/form/RegisterForm";

const RegisterLayout = () => {
  return (
    <div className="min-h-screen md:flex">
      <div className="flex-1 bg-register bg-no-repeat bg-cover bg-center">
        <div className="max-w-4xl h-full text-white bg-dark/70 px-14 py-16 leading-10">
          <div className="text-5xl flex flex-col gap-y-4 font-semibold mb-4 leading-tight">
            <h1>One Step Closer to</h1>
            <h1>Your Dream Career!</h1>
            <h2 className=" font-semibold mb-6">Join Now!</h2>
          </div>
          <p className="text-light text-lg">
            A service that help you to improve your skills and <br /> pursue
            greater career
          </p>
        </div>
      </div>
      <RegisterForm />
    </div>
  );
};

export default RegisterLayout;
