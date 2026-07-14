import { useCallback, useEffect, useState } from "react";

import { getTasks, createTask, updateTask, deleteTask } from "../api/taskApi";

import useDebounce from "../hooks/useDebounce";

import Loader from "../components/common/Loader";
import EmptyState from "../components/common/EmptyState";

import TaskForm from "../components/task/TaskForm";
import SearchBar from "../components/task/SearchBar";
import FilterBar from "../components/task/FilterBar";
import TaskTable from "../components/task/TaskTable";
import Pagination from "../components/task/Pagination";
import ConfirmModal from "../components/task/ConfirmModal";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [selectedTask, setSelectedTask] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const debouncedSearch = useDebounce(search, 500);

  const fetchTasks = useCallback(async () => {
    try {
      setLoading(true);
      const response = await getTasks({
        page,
        limit: 5,
        search: debouncedSearch,
        status,
        priority,
      });
      setTasks(response.data.data);
      setTotalPages(response.data.totalPages);
      setError("");
    } catch (error) {
      setError(error.response?.data?.message || "Failed to load tasks");
    } finally {
      setLoading(false);
      setInitialLoading(false);
    }
  }, [page, debouncedSearch, status, priority]);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const handleSubmit = async (task) => {
    try {
      const payload = {
        title: task.title,
        description: task.description,
        status: task.status,
        priority: task.priority,
        due_date: task.due_date,
      };

      if (selectedTask) {
        await updateTask(selectedTask.id, payload);
        setSelectedTask(null);
      } else {
        await createTask(payload);
      }
      fetchTasks();
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTask(deleteId);
      setDeleteId(null);
      fetchTasks();
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

  const handleEdit = useCallback((task) => {
    setSelectedTask(task);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const handleDeleteClick = useCallback((task) => {
    setDeleteId(task.id);
  }, []);

  if (initialLoading) {
    return <Loader />;
  }

  return (
    <div className="space-y-8">
      <div
        className="
          grid
          md:grid-cols-4
          gap-4
        "
      >
        <SearchBar
          value={search}
          onChange={(e) => {
            setPage(1);
            setSearch(e.target.value);
          }}
        />

        <FilterBar
          status={status}
          priority={priority}
          onStatusChange={(e) => {
            setPage(1);
            setStatus(e.target.value);
          }}
          onPriorityChange={(e) => {
            setPage(1);
            setPriority(e.target.value);
          }}
        />
      </div>

      {loading && (
        <div
          className="
              text-sm
              text-blue-600
            "
        >
          Updating tasks...
        </div>
      )}

      {tasks.length === 0 ? (
        <EmptyState />
      ) : (
        <>
          <TaskTable
            tasks={tasks}
            onEdit={handleEdit}
            onDelete={handleDeleteClick}
          />

          <Pagination
            page={page}
            totalPages={totalPages}
            onPrevious={() => {
              setPage((prev) => prev - 1);
            }}
            onNext={() => {
              setPage((prev) => prev + 1);
            }}
          />
        </>
      )}

      <TaskForm selectedTask={selectedTask} onSubmit={handleSubmit} />

      <ConfirmModal
        open={deleteId !== null}
        onCancel={() => {
          setDeleteId(null);
        }}
        onConfirm={handleDelete}
      />
    </div>
  );
};

export default Home;
