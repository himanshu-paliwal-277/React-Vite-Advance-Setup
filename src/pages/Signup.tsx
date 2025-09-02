import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Signup</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
        />
        <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Signup
        </button>
      </form>
      <p className="text-sm mt-4">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-600">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Signup;
