const dataFetchingServer = async ({ searchParams }) => {
  const searchParamsServer = await searchParams;

  const userName = await searchParamsServer.name;
  const data = await fetch(`https://api.genderize.io/?name=${userName}`);
  const userData = await data.json();
  return (
    <>
      <h1>Data Fetching</h1>
      <ul>
        <li>{userData.name}</li>
        <li>{userData.gender}</li>
        <li>{userData.probability}</li>
      </ul>
    </>
  );
};

export default dataFetchingServer;
