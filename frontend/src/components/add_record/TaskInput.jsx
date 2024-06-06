import { Input, Button } from '@nextui-org/react';
import { IoIosRemoveCircleOutline } from 'react-icons/io';

const TaskInput = ({ taskNum, deleteHandler, valueHandler }) => {
  return (
    <div className="mt-4 mb-0 flex justify-center items-center gap-2">
      <Input
        type="text"
        color="secondary"
        variant="bordered"
        placeholder="Enter a task..."
        className="max-w-xs"
        onChange={(e) => valueHandler(e, taskNum)}
      />
      <Button
        isIconOnly
        color="danger"
        size="sm"
        variant="light"
        onPress={() => deleteHandler(taskNum)}
      >
        <IoIosRemoveCircleOutline className="text-2xl" />
      </Button>
    </div>
  );
};

export default TaskInput;
