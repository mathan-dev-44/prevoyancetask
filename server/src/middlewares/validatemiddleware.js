import taskSchema from "../validations/taskValidation.js";

const validateTask = (req, res, next) => {
  const { error } = taskSchema.validate(req.body, {
    abortEarly: false,
  });

  if (error) {
    const errors = error.details.map((err) => ({
      field: err.path.join("."),
      message: err.message,
    }));

    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors,
    });
  }

  next();
};

export default validateTask;
