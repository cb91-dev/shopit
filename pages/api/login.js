import Users from "../../models/Register";

const Login = async (req, res, body) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const user = await Users.find({});

        res.status(200).json({ success: true, data: user });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "POST":
      const userEmail = req.body.email;
      const userPword = req.body.password;
      try {
        const user = await Users.findOne({
          email: userEmail,
          password: userPword,
        });
        if (!user) {
          res.status(401).json({ success: false, res: 401 });
        } else {
          res.status(200).json({ res: 200 });
        }
      } catch (error) {
        res.status(401).json({ success: false, res: 401 });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};

export default Login;
