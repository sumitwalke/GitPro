import Repositories from "./Repositories";

export default function Profile(props) {
  const { username, data } = props;
  return (
    <section>
      <div className="profile-avatar">
        <img src={data?.avatar_url} alt="profile-avatar" />
      </div>
      <div className="profile-info">
        <h2 className="profile-username">{data?.name}</h2>
        <p className="profile-bio">{data?.bio}</p>
        <p>
          <i className="fa-solid fa-location-dot"></i> {data?.location}
        </p>
        <p className="profile-repos">
          Number of Repositories: {data?.public_repos}
        </p>
        <p className="profile-followers-following">
          Followers: {data?.followers} Following: {data?.following}
        </p>
      </div>
      {/* <Repositories repos_url={username} /> */}
    </section>
  );
}
