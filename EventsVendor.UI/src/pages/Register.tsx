import { Link } from "react-router-dom";
import BrandLogo from "../components/BrandLogo";
import Button from "../components/Button";
import CustomInput from "../components/CustomInput";

const Register = () => {
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-sm w-full text-gray-600 space-y-5">
        <div className="text-center pb-8">
          <BrandLogo />
          <div className="mt-5">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Register a new account
            </h3>
          </div>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
          <CustomInput type="text" name="First Name" />
          <CustomInput type="text" name="Last Name" />
          <CustomInput type="email" name="Email" />
          <CustomInput type="password" name="Password" />
          <Button text="Register" />
        </form>
        <p className="text-center">
          <span className="mr-1"> Registered already? </span>
          <Link
            to="/login"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Login
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
