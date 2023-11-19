import PropTypes from 'prop-types';
import useGithubUser from './userGithubUser';

const GithubUser = ({ username }) => {
  const { userData, loading, error } = useGithubUser(username);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h2>{userData.name}</h2>
      <p>Username: {userData.login}</p>
      <p>Followers: {userData.followers}</p>
    </div>
  );
};

GithubUser.propTypes = {
  username: PropTypes.string.isRequired,
};

export default GithubUser;
