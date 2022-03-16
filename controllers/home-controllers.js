const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("homepage");
});

router.get("/login", (req, res) => {
  res.render("login");
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

module.exports = router;
