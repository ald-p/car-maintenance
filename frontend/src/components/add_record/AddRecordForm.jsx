import { Input, DatePicker, Button } from '@nextui-org/react';
import AddServiceTask from './AddServiceTask';
import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';

export const AddRecordForm = () => {
  const [name, setName] = useState('');
  const [shop, setShop] = useState('');
  const [mileage, setMileage] = useState('');
  const [cost, setCost] = useState('');
  const [tasks, setTasks] = useState([]);
  const [notes, setNotes] = useState('');
  const [date, setDate] = useState('');

  const handleDataFromTask = (data) => {
    const taskItems = data.map((task) => task.value);
    setTasks(taskItems);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const authToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY1OWYyY2Q5MmVmYmFjZjI2NzA0MGFjIn0sImlhdCI6MTcxNzcxNzU3MywiZXhwIjoxNzE3NzIxMTczfQ.BWm3-r1ZumBOfqiSXS5CT3KOtvy_xZCRhO0uQSiSspo';

    const formObj = {
      name,
      shop,
      mileage,
      cost,
      tasks,
      notes,
      date,
    };

    try {
      const res = await fetch('http://localhost:3000/records', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formObj),
      });
      const data = await res.json();

      if (data.message) {
        throw new Error();
      }

      toast.success('Record successfully created!');
    } catch (error) {
      toast.error('Record could not be created!');
    }

    // Reset form
    e.target.reset();
    setName('');
    setShop('');
    setMileage('');
    setCost('');
    setTasks([]);
    setNotes('');
  };

  return (
    <section className="container mx-auto max-w-sm my-10 px-4">
      <Toaster
        toastOptions={{ className: 'bg-gray-800 text-foreground' }}
        position="top-right"
      />
      <form
        className="flex flex-col justify-center items-center gap-4"
        onSubmit={handleFormSubmit}
      >
        <h2 className="self-start text-xl">Service Info</h2>
        <Input
          isRequired
          type="text"
          label="Name"
          placeholder="Enter service name"
          className="max-w-sm"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <DatePicker
          label="Date"
          className="max-w-sm"
          name="date"
          isRequired
          onChange={(value) => setDate(Date(value))}
        />
        <Input
          isRequired
          type="text"
          label="Shop Name"
          placeholder="Enter shop name"
          className="max-w-sm"
          name="shop"
          value={shop}
          onChange={(e) => setShop(e.target.value)}
        />
        <Input
          isRequired
          type="number"
          label="Mileage"
          placeholder="Enter mileage"
          className="max-w-sm"
          name="mileage"
          value={mileage}
          onChange={(e) => setMileage(e.target.value)}
        />
        <Input
          isRequired
          type="number"
          label="Cost"
          placeholder="Enter cost"
          className="max-w-sm"
          name="cost"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
        />

        <AddServiceTask sendDataToForm={handleDataFromTask} />

        <Input
          type="text"
          label="Additional Notes"
          placeholder="Enter any additional notes"
          className="max-w-sm my-4"
          name="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <Button color="success" type="submit">
          Submit New Record
        </Button>
      </form>
    </section>
  );
};
