import { useEffect, useState } from "react";

const useFetchApps = () => {
  const [apps, setApps] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("/public/appsData.json")
        .then((res) => res.json())
        .then((data) => setApps(data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }, 2000);
  }, []);
  return { apps, error, loading };
};

export default useFetchApps;
