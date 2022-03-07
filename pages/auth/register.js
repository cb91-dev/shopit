import RegForm from "../../components/RegForm";
import { useRouter } from "next/router";

const Register = () => {
  const router = useRouter();
  const RegFormSubmitData = ({
    userInput: { firstName, lastName, email, password },
  }) => {
    fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName, lastName, email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.res === 201) {
          console.log("Ya did it!!");
          router.push("/profile");
        } else {
          console.log("nope");
          console.log(data.res);
        }
      });
  };

  return (
    <>
      <RegForm RegFormSubmitData={RegFormSubmitData} />
    </>
  );
};

export default Register;
