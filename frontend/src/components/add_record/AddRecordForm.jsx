import {
  Input,
  DatePicker,
  Listbox,
  ListboxItem,
  ListboxSection,
  Button,
  Chip,
} from '@nextui-org/react';
import { ListboxWrapper } from '../util/ListboxWrapper';
import AddServiceTask from './AddServiceTask';

export const AddRecordForm = () => {
  return (
    <section className="container mx-auto max-w-sm my-10 px-4">
      <form className="flex flex-col justify-center items-center gap-4">
        <h2 className="self-start text-xl">Service Info</h2>
        <Input
          isRequired
          type="text"
          label="Name"
          placeholder="Enter service name"
          className="max-w-sm"
          name="name"
        />
        <DatePicker label="Date" className="max-w-sm" name="date" isRequired />
        <Input
          isRequired
          type="text"
          label="Shop Name"
          placeholder="Enter shop name"
          className="max-w-sm"
          name="shop"
        />
        <Input
          isRequired
          type="number"
          label="Mileage"
          placeholder="Enter mileage"
          className="max-w-sm"
          name="mileage"
        />
        <Input
          isRequired
          type="number"
          label="Cost"
          placeholder="Enter cost"
          className="max-w-sm"
          name="cost"
        />

        <AddServiceTask />

        <Input
          type="text"
          label="Additional Notes"
          placeholder="Enter any additional notes"
          className="max-w-sm mt-4"
          name="task"
        />
        <Button color="success" type="submit">
          Submit New Record
        </Button>
      </form>
    </section>
  );
};
