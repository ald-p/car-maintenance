import { Button, input } from '@nextui-org/react';
import { useState } from 'react';
import TaskInput from './TaskInput';

const AddServiceTask = ({ sendDataToForm }) => {
  const [taskList, setTaskList] = useState([]);

  const handleDeleteTask = (num) => {
    const newTaskList = taskList.filter((task) => task.taskNum !== num);
    setTaskList(newTaskList);
    sendDataToForm(newTaskList);
  };

  const handleAddTask = () => {
    const newTaskList = taskList.concat({
      taskNum: taskList.length + 1,
      value: '',
    });
    setTaskList(newTaskList);
    sendDataToForm(newTaskList);
  };

  const handleInputChange = (e, taskNum) => {
    const newTaskList = taskList.map((task) =>
      task.taskNum === taskNum ? { ...task, value: e.target.value } : task
    );
    setTaskList(newTaskList);
    sendDataToForm(newTaskList);
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
        color="secondary"
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
