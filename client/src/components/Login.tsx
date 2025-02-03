import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const { state, dispatch } = useAuth();

  const handleLogin = () => {
    const user = { username: "Mehdi", email: "mehdijeyrani@gmail.com" };
    dispatch({ type: "LOGIN", payload: user });
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="p-4 border rounded-md shadow-md text-center">
      {state.isAuthenticated ? (
        <div>
          <h2 className="text-xl font-semibold">
            Welcome, {state.user?.username}
          </h2>
          <p>Email: {state.user?.email}</p>
          <button
            className="bg-rose-500 text-white px-4 py-2 rounded mt-3"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-semibold mb-2">Login</h2>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
