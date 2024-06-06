import { Button, input } from '@nextui-org/react';
import { useState } from 'react';
import TaskInput from './TaskInput';

const AddServiceTask = () => {
  const [taskList, setTaskList] = useState([]);

  const handleDeleteTask = (num) => {
    setTaskList(taskList.filter((task) => task.taskNum !== num));
    console.log(taskList);
  };

  const handleAddTask = () => {
    setTaskList(taskList.concat({ taskNum: taskList.length + 1, value: '' }));
  };

  const handleInputChange = (e, taskNum) => {
    const updatedTaskList = taskList.map((task) =>
      task.taskNum === taskNum ? { ...task, value: e.target.value } : task
    );
    setTaskList(updatedTaskList);
  };

  return (
    <div className="flex flex-col self-start">
      <h2 className="self-start text-xl">
        Service Tasks <span className="text-danger">*</span>
      </h2>
      <p className="text-gray-600 text-xs self-start">
        Click "Add Task" to add multiple service tasks.
      </p>
      <Button
        color="primary"
        variant="bordered"
        size="sm"
        radius="full"
        className="self-start mt-2"
        onPress={handleAddTask}
      >
        Add Task
      </Button>
      <div className="flex flex-col">
        {taskList.map((task) => (
          <TaskInput
            key={task.taskNum}
            taskNum={task.taskNum}
            deleteHandler={handleDeleteTask}
            valueHandler={handleInputChange}
          />
        ))}
      </div>
    </div>
  );
};

export default AddServiceTask;
