const validateTaskStatus = (req, res, next) => {
  if (!req.body || typeof req.body !== "object" || Array.isArray(req.body)) {
    return res.status(400).json({
      message: "O corpo da requisição deve ser um objeto.",
    });
  }
  const { completed } = req.body;

  if (typeof completed !== "boolean") {
    return res.status(400).json({
      message: "O campo completed deve ser booleano.",
    });
  }

  const allowedFields = ["completed"];

  const invalidFields = Object.keys(req.body).filter(
    (field) => !allowedFields.includes(field),
  );

  if (invalidFields.length > 0) {
    return res.status(400).json({
      message: "Campos não permitidos.",
      fields: invalidFields,
    });
  }

  next();
};

module.exports = validateTaskStatus;
