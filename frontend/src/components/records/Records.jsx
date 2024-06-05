import { Accordion, AccordionItem } from '@nextui-org/react';
import { IoIosSpeedometer } from 'react-icons/io';
import { FaMoneyBillWave } from 'react-icons/fa';
import { MdDateRange } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
import RecordSubtitle from './RecordSubtitle';
import Tasks from './Tasks';
import Notes from './Notes';

const Records = () => {
  const data = {
    id: '665e1895a0e4e259a4a0cce4',
    name: '30,000 miles Service',
    shop: 'Alexandria Toyota',
    mileage: '30,000',
    tasks: [
      'Engine oil and filter change',
      'Replace cabin air filter',
      'Brake inspection',
      'Tire rotation',
    ],
    notes: 'No issues on the brakes.',
    date: '06/16/2024',
    cost: 52.34,
  };

  return (
    <section className="container mx-auto max-w-2xl mt-10 px-4">
      <Accordion variant="splitted">
        <AccordionItem
          key={data.id}
          title={
            <p>
              <span>{data.name}</span>
            </p>
          }
          subtitle={
            <div className="flex flex-col sm:flex-row gap-2 md:gap-6 items-start mt-2">
              <RecordSubtitle
                Icon={MdDateRange}
                data="06-16-2024"
                color="text-primary"
              />
              <RecordSubtitle
                Icon={FaLocationDot}
                data={data.shop}
                color="text-danger"
              />
              <RecordSubtitle
                Icon={IoIosSpeedometer}
                data={data.mileage}
                color="text-warning"
              />
              <RecordSubtitle
                Icon={FaMoneyBillWave}
                data={data.cost}
                color="text-success"
              />
            </div>
          }
          aria-label={data.date}
        >
          <Tasks tasks={data.tasks} />
          <Notes notes={data.notes} />
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default Records;
