import useFetch from '../hooks/useFetch';

const API_KEY = process.env.REACT_APP_API_NINJAS_API_KEY;
const QUOTES_URL = 'https://api.api-ninjas.com/v1/quotes';

function Quote() {
  const { isLoading, data, error } = useFetch(QUOTES_URL, {
    headers: { 'X-Api-Key': API_KEY },
    contentType: 'application/json',
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Unable to load quote...</p>;
  }

  const first = data[0];

  return (
    <div>
      <p>{first.quote}</p>
      <p>
        by
        <span>{first.author}</span>
      </p>
    </div>
  );
}

export default Quote;
