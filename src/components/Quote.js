import { useMemo } from 'react';
import useFetch from '../hooks/useFetch';
import styles from '../styles/Quote/Quote.module.css';

const API_KEY = process.env.REACT_APP_API_NINJAS_API_KEY;
const QUOTES_URL = 'https://api.api-ninjas.com/v1/quotes';

function Quote() {
  const options = useMemo(
    () => ({
      headers: { 'X-Api-Key': API_KEY },
      contentType: 'application/json',
    }),
    [],
  );

  const { isLoading, data, error } = useFetch(QUOTES_URL, options);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Unable to load quote...</p>;
  }

  const first = data[0];

  return (
    <section data-testid="quote-content" className={styles.wrapper}>
      <p className={styles.quote}>{first.quote}</p>
      <p className={styles.right}>
        by
        <span className={styles.author}>{first.author}</span>
      </p>
    </section>
  );
}

export default Quote;
