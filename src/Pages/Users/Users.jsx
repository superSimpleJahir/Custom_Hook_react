
import User from '../../Component/User/User';
import useFetch from './../../CustomHook/useFetch';

const Users = () => {
  const [data] = useFetch('https://jsonplaceholder.typicode.com/users')
  return (
    <section className="usersSection container">
      <h1>Users section</h1>
      <div className="usersGrid">
        {
          data&& data.map((value)=>(
            <User key={value.id} value={value} />
          ))
        }
      </div>
    </section>
  );
};

export default Users;