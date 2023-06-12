const profile = async (request, response) => {
  console.log(request.user);
  response.status(201).send({
    message: `${request.user.userEmail} is logged in`,
  });
};

module.exports = { profile };
