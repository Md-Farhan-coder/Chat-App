const User = require("./userModel.js");

exports.create = async (req, res) => {
	try {
		const userData = new User(req.body);
		
		if (!userData) {
			return res.status(404).json({ msg: "User data not found" });
		}

		  const user = await User.findOne({phone:userData.phone});
		  console.log("Data   ",user);
		              if(user)
		  			{	 res.status(409).json({ message: "User already existed Please Login" });}
		 else {
			await userData.save();
			res.status(200).json({ 
				id: userData._id,
				msg: "User created successfully",
				name: userData.name,
			}); 
		 }
	} catch (error) {
		res.status(500).json({ error: "Error Occured" });
	}
};

exports.login = async (req, res) => {
	const { phone, password } = await req.body;

	try {
		// Check if the user exists
		const user = await User.findOne({ phone });
		if (!user) {
			return res.status(402).json({ message: "User not found" });
		}

		// Check if the password is correct
		//const isPasswordValid = await bcrypt.compare(password, user.password);
		if (password != user.password) {
			return res.status(401).json({ message: "Invalid password" });
		}

		// Redirect the user or send some response indicating successful login
		res.status(200).json({
			id: user._id,
			message: "Login successful",
			name: user.name,
		});
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: "Internal server error" });
	}
};
