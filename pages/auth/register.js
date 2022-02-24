import RegForm from "../../components/RegForm";

const register = () => {
  const RegFormSubmitData = ({
    userInput: { firstName, lastName, email, password },
  }) => {
    fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName, lastName, email, password }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  return (
    <>
      <RegForm RegFormSubmitData={RegFormSubmitData} />
    </>
  );
};

export default register;
