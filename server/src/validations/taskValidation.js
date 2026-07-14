import Joi from "joi";

const taskSchema = Joi.object({
  title: Joi.string().trim().min(3).max(150).required().messages({
    "string.empty": "Title is required",
    "string.min": "Title must be at least 3 characters",
    "string.max": "Title cannot exceed 150 characters",
    "any.required": "Title is required",
  }),

  description: Joi.string().trim().required().messages({
    "string.empty": "Description is required",
    "any.required": "Description is required",
  }),

  status: Joi.string()
    .valid("Pending", "In Progress", "Completed")
    .required()
    .messages({
      "any.only": "Status must be Pending, In Progress or Completed",
      "any.required": "Status is required",
    }),

  priority: Joi.string().valid("Low", "Medium", "High").required().messages({
    "any.only": "Priority must be Low, Medium or High",
    "any.required": "Priority is required",
  }),

  due_date: Joi.date().greater("now").required().messages({
    "date.greater": "Due date cannot be in the past",
    "any.required": "Due date is required",
  }),
});

export default taskSchema;
