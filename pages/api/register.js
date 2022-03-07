import dbConnect from "../../utils/dbConnect.mjs";
import Users from "../../models/Register";

dbConnect();

const Register = async (req, res) => {
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
      try {
        const user = await Users.create(req.body);
        res.status(201).json({ success: true, data: user, res: 201 });
      } catch (error) {
        res.status(401).json({ success: false, res: 401 });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};

export default Register;
