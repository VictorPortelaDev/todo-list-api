const validateTaskId = (req, res, next) => {
    const { id } = req.params; 

    const taskId = Number(id);

    if(!Number.isInteger(taskId) || taskId <= 0) {
        return res.status(400).json({
            message: "Id inválido."
        })
    }

    next();
};

module.exports = validateTaskId;