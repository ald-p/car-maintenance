const PageHeading = ({ title }) => {
  return (
    <header>
      <div className="text-center mt-10">
        <h1 className="lg:text-5xl text-4xl font-bold">{title}</h1>
      </div>
    </header>
  );
};

export default PageHeading;
