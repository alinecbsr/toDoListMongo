exports.listAll = (req, res) => {
  let users = [
    {
      nome: "teste 01",
      email: "test@123.com",
    },
    {
      nome: "teste 01",
      email: "test2t@123.com",
    },
    {
      nome: "teste 01",
      email: "test3@123.com",
    },
  ];
  res.send(users);
};

exports.createOne = (req, res) => {
  let response = {
    message: "Usuário cadastrado com sucesso",
    data: req.body,
  };
  res.status(201).json(response);
};
