import { Listbox, ListboxItem } from '@nextui-org/react';
import { ListboxWrapper } from '../util/ListboxWrapper';

const Tasks = ({ tasks }) => {
  return (
    <div>
      <h1 className="text-l font-semibold mb-2">Services Performed</h1>
      <ListboxWrapper>
        <Listbox aria-label="Actions" onAction={(key) => alert(key)}>
          {tasks.map((task, index) => (
            <ListboxItem key={index} color="secondary">
              {task}
            </ListboxItem>
          ))}
        </Listbox>
      </ListboxWrapper>
    </div>
  );
};

export default Tasks;
