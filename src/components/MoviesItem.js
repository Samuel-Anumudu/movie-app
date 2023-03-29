const MoviesItem = ({ movie, tag }) => {
  const { title } = movie;
  return (
    <>
      <h1>{title}</h1>
    </>
  );
};

export default MoviesItem;
