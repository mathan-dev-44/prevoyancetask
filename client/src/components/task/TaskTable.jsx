import { memo } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const TaskTable = ({ tasks, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow mt-6">
      <table className="min-w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="p-3 text-left">Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Due Date</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="border-t">
              <td className="p-3">{task.title}</td>

              <td>{task.description}</td>

              <td>{task.status}</td>

              <td>{task.priority}</td>

              <td>{task.due_date}</td>

              <td>
                <div className="flex gap-2">
                  <button
                    onClick={() => onEdit(task)}
                    className="text-blue-600"
                  >
                    <FaEdit />
                  </button>

                  <button
                    onClick={() => onDelete(task)}
                    className="text-red-600"
                  >
                    <FaTrash />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default memo(TaskTable);
