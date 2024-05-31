import PageHeading from './components/base/PageHeading';
import NavBar from './components/nav/NavBar';
import Button from './components/base/Button';
import RecordsList from './components/records/RecordsList';

function App() {
  return (
    <div className="flex flex-col">
      <NavBar />
      <PageHeading title="Maintenance Records" />
      <Button colorClass="btn-primary" text="Add New Record" />
      <RecordsList />
    </div>
  );
}

export default App;
