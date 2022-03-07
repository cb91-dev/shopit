import LoginForm from "../../components/LoginForm";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const LoginFormSubmitData = ({ userInput: { email, password } }) => {
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.res === 200) {
          console.log("Ya did it!!");
        } else {
          console.log("nope");
          console.log(data.res);
        }
      });
  };
  return (
    <>
      <LoginForm LoginFormSubmitData={LoginFormSubmitData} />
    </>
  );
};

export default Login;
