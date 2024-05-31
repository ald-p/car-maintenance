import RecordListItem from './RecordListItem';

const RecordsList = () => {
  return (
    <section>
      <div className="container mx-auto flex flex-col max-w-4xl w-11/12 md:w-full lg:w-full ">
        <RecordListItem />
        <RecordListItem />
      </div>
    </section>
  );
};

export default RecordsList;
