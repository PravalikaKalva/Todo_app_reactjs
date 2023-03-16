import { useState } from "react";

const TaskManager = () => {
  const [currentTask, setCurrentTask] = useState("");
  const [allTasks, setAllTasks] = useState([]);
  const [editingIndex, setEditingIndex] = useState(undefined);

  const handlerOnChange = (event) => {
    //console.log(event.target.value, "= target value");
    setCurrentTask(event.target.value);
    //console.log(currentTask, "= currentTask");
  };

  const handlerOnSubmit = () => {
    if (currentTask.length > 0) {
      if (editingIndex != undefined) {
        const newAllTasks = [...allTasks];
        newAllTasks[editingIndex] = currentTask;
        setAllTasks(newAllTasks);
        //setAllTasks[i](newAllTasks[editingIndex]);
        setCurrentTask("");
        setEditingIndex(undefined);
      } else {
        const newAllTasks = [...allTasks, currentTask];
        setAllTasks(newAllTasks);
        setCurrentTask("");
      }
    }
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setCurrentTask(allTasks[index]);
    console.log("called");
  };

  const handleDelete = (index) => {
    console.log("delete");
    // const updatedTasks = allTasks.filter((element, ind) => {
    //   if (ind != index) {
    //     return true;
    //   }
    // });
    allTasks.splice(index, 1);
    const updatedTasks = [...allTasks];
    setAllTasks(updatedTasks);
  };

  return (
    <div style={{ width: 600 }}>
      <div className="mb-3">
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Search here"
          value={currentTask}
          onChange={handlerOnChange}
        />
        <button
          onClick={handlerOnSubmit}
          type="button"
          className="btn btn-primary mb-3"
        >
          Submit
        </button>
        <table className="table table-success table-striped">
          <thead>
            <tr>
              <th>SI</th>
              <th>Task</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {allTasks.map((value, index) => {
              return (
                <>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{value}</td>
                    <td>
                      <button
                        onClick={() => {
                          handleEdit(index);
                        }}
                        type="button"
                        className="btn btn-secondary"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          handleDelete(index);
                        }}
                        type="button"
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskManager;
