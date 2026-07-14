import { memo } from "react";
import Select from "../common/Select";

const statusOptions = [
  { label: "All Status", value: "" },
  { label: "Pending", value: "Pending" },
  { label: "In Progress", value: "In Progress" },
  { label: "Completed", value: "Completed" },
];

const priorityOptions = [
  { label: "All Priority", value: "" },
  { label: "High", value: "High" },
  { label: "Medium", value: "Medium" },
  { label: "Low", value: "Low" },
];

const FilterBar = ({ status, priority, onStatusChange, onPriorityChange }) => {
  return (
    <>
      <Select
        label="Status"
        name="status"
        value={status}
        onChange={onStatusChange}
        options={statusOptions}
      />

      <Select
        label="Priority"
        name="priority"
        value={priority}
        onChange={onPriorityChange}
        options={priorityOptions}
      />
    </>
  );
};

export default memo(FilterBar);
