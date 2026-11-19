const validateUpdateTask = (req, res, next) => {

  // Verifica se o body é um objeto válido
  if (!req.body || typeof req.body !== "object" || Array.isArray(req.body)) {
    return res.status(400).json({
      message: "O corpo da requisição deve ser um objeto.",
    });
  }

  const { title, description } = req.body;

  // Verifica campos não permitidos
  const allowedFields = ["title", "description"];

  const invalidFields = Object.keys(req.body).filter(
    field => !allowedFields.includes(field)
  );

  if (invalidFields.length > 0) {
    return res.status(400).json({
      message: "Campos não permitidos.",
      fields: invalidFields
    });
  }

  // Valida o título
  if (typeof title !== "string" || title.trim() === "") {
    return res.status(400).json({
      message: "O título é obrigatório e deve ser um texto válido.",
    });
  }

  if (title.length > 150) {
    return res.status(400).json({
      message: "O título deve ter no máximo 150 caracteres.",
    });
  }

  // Valida a descrição
  if (description === undefined) {
    return res.status(400).json({
      message: "A descrição é obrigatória.",
    });
  }
  
  if (description !== null && typeof description !== "string") {
    return res.status(400).json({
      message: "A descrição deve ser um texto ou nula.",
    });
  }

  next();
};

module.exports = validateUpdateTask;
