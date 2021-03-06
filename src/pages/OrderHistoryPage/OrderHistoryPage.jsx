import * as usersService from '../../utilities/users-service';

export default function OrderHistoryPage() {
  async function handleCheckToken() {
    const expData = await usersService.checkToken();
    console.log(expData);
  }

  return (
    <>
      <h1>OrderHistoryPage</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </>
  );
}