const Pagination = ({ total, limit, page, setPage }) => {
  const numPages = Math.ceil(total / limit);

  return (
    <>
      <nav>
        <button onClick={() => setPage((prev) => prev - 1)} disabled={page === 1}>
          &lt;
        </button>
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <button key={i + 1} onClick={() => setPage(i + 1)}>
              {i + 1}
            </button>
          ))}
        <button onClick={() => setPage((prev) => prev + 1)} disabled={page === numPages}>
          &gt;
        </button>
      </nav>
    </>
  );
};

export default Pagination;
