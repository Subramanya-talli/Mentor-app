const User = require("../../models/user/userModel");

async function createUser(req, res) {
  try {
    const { name, email, password, intrest } = req.body;
    const newUser = await User.create({
      name,
      email,
      password,
      intrest,
    });

    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function getUser(req, res){
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if(!user) return res.status(404).json("User Does Not Exist");

    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({message : error.message})
  }
}

async function updateUser(req, res) {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ message: "User Not Found" });
    const { name, password, intrest } = req.body;
    const updateUser = await User.findByIdAndUpdate(
      { id },
      { name, password, intrest },
      { new: true }
    );

    return re.status(201).json(updateUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}


async function getAllUsers(req, res)
{
  try {
    const users = await User.findBy();
    return res.status(201).json(users)
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
}

module.exports = {
  createUser,
  getUser,
  updateUser,
  getAllUsers
};
