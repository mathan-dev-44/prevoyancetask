import { useEffect, useState } from "react";

import Input from "../common/Input";
import TextArea from "../common/TextArea";
import Select from "../common/Select";
import Button from "../common/Button";

const statusOptions = [
  { label: "Pending", value: "Pending" },
  { label: "In Progress", value: "In Progress" },
  { label: "Completed", value: "Completed" },
];

const priorityOptions = [
  { label: "High", value: "High" },
  { label: "Medium", value: "Medium" },
  { label: "Low", value: "Low" },
];

const initialState = {
  title: "",
  description: "",
  status: "Pending",
  priority: "Medium",
  due_date: "",
};

const TaskForm = ({ onSubmit, selectedTask }) => {
  const [form, setForm] = useState(initialState);

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (selectedTask) {
      setForm({
        ...selectedTask,
        due_date: selectedTask.due_date?.split("T")[0],
      });
    } else {
      setForm(initialState);
    }
  }, [selectedTask]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const validationErrors = {};

    if (!form.title.trim()) validationErrors.title = "Title is required";

    if (form.title.length < 3)
      validationErrors.title = "Minimum 3 characters required";

    if (!form.description.trim())
      validationErrors.description = "Description is required";

    if (!form.due_date) validationErrors.due_date = "Due date is required";

    if (new Date(form.due_date) < new Date().setHours(0, 0, 0, 0)) {
      validationErrors.due_date = "Due date cannot be in the past";
    }

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    onSubmit(form);

    setForm(initialState);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow p-6 space-y-5"
    >
      <h2 className="text-2xl font-bold">
        {selectedTask ? "Edit Task" : "Create Task"}
      </h2>

      <Input
        label="Title"
        name="title"
        value={form.title}
        onChange={handleChange}
        error={errors.title}
      />

      <TextArea
        label="Description"
        name="description"
        value={form.description}
        onChange={handleChange}
        error={errors.description}
      />

      <div className="grid md:grid-cols-3 gap-4">
        <Select
          label="Status"
          name="status"
          value={form.status}
          options={statusOptions}
          onChange={handleChange}
        />

        <Select
          label="Priority"
          name="priority"
          value={form.priority}
          options={priorityOptions}
          onChange={handleChange}
        />

        <Input
          label="Due Date"
          name="due_date"
          type="date"
          value={form.due_date}
          onChange={handleChange}
          error={errors.due_date}
        />
      </div>

      <Button type="submit">
        {selectedTask ? "Update Task" : "Create Task"}
      </Button>
    </form>
  );
};

export default TaskForm;
