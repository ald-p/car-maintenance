import { Accordion, AccordionItem, Button } from '@nextui-org/react';
import { IoIosSpeedometer } from 'react-icons/io';
import { FaMoneyBillWave } from 'react-icons/fa';
import { MdDateRange } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import RecordSubtitle from './RecordSubtitle';
import Tasks from './Tasks';
import Notes from './Notes';
import { useEffect, useState } from 'react';

const Records = () => {
  const [records, setRecords] = useState([]);

  const authToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY1OWYyY2Q5MmVmYmFjZjI2NzA0MGFjIn0sImlhdCI6MTcxNzcxNzU3MywiZXhwIjoxNzE3NzIxMTczfQ.BWm3-r1ZumBOfqiSXS5CT3KOtvy_xZCRhO0uQSiSspo';

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const res = await fetch('http://localhost:3000/records', {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        const data = await res.json();
        console.log(data);
        setRecords(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRecords();
  }, []);

  return (
    <section className="container mx-auto max-w-2xl mt-10 px-4">
      <Accordion variant="splitted">
        {records.map((record) => (
          <AccordionItem
            key={record._id}
            title={
              <p>
                <span>{record.name}</span>
              </p>
            }
            subtitle={
              <div className="flex flex-col sm:flex-row gap-2 md:gap-6 items-start mt-2">
                <RecordSubtitle
                  Icon={MdDateRange}
                  data={record.date.slice(0, 10)}
                  color="text-primary"
                />
                <RecordSubtitle
                  Icon={FaLocationDot}
                  data={record.shop}
                  color="text-danger"
                />
                <RecordSubtitle
                  Icon={IoIosSpeedometer}
                  data={`${record.mileage.toLocaleString()} miles`}
                  color="text-warning"
                />
                <RecordSubtitle
                  Icon={FaMoneyBillWave}
                  data={`$${record.cost.toFixed(2)}`}
                  color="text-success"
                />
              </div>
            }
            aria-label={record.date}
          >
            <Tasks tasks={record.tasks} />
            <Notes
              notes={record.notes ? record.notes : 'No additional notes.'}
            />
            <div>
              <Button
                isIconOnly
                color="warning"
                variant="light"
                size="sm"
                radius="lg"
              >
                <FaEdit className="text-xl" />
              </Button>
              <Button
                isIconOnly
                color="danger"
                variant="light"
                size="sm"
                radius="lg"
              >
                <RiDeleteBin6Line className="text-xl" />
              </Button>
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default Records;
