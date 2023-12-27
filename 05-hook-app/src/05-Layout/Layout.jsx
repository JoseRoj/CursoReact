import { useCounter, useFetch } from "../Hooks";
import { LoadingQuote, Quote } from "../03-example";
export const Layout = () => {
  const { counter, increment } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0]; //!undefined = true -- !!undefined = false
  console.log({ data, isLoading, hasError });
  return (
    <>
      <h1>Breaking Bad Hooks</h1>
      <hr />
      {/*isLoading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-1">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )*/}
      {isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}

      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={() => {
          increment();
        }}
      >
        Next quote
      </button>
    </>
  );
};
