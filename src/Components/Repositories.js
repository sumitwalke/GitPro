import { useEffect, useState } from "react";

export default function Repositories(props) {
  const { username } = props;

  //   const [repo, setRepo] = useState(null);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos`
        );
        const apiData = await response.json();
        setRepo(apiData);
      } catch (error) {
        console.log("Failed to fetch Repositories", error);
      }
    }
    fetchRepos();
  }, []);
  return <div className="repositories-list"></div>;
}
