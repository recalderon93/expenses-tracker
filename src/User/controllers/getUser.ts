const getUser: Handler = (req, res) => {
  res.send(`Hello User: ${req.params.user}`);
};

export default getUser;
