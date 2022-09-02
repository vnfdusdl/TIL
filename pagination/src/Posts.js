import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Pagination from './Pagination';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <Layout>
      <header>
        <h1>게시물 목록</h1>
      </header>
      <main>
        {posts.slice(offset, offset + limit).map(({ id, title, body }) => (
          <article key={id}>
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </main>
      <Pagination total={posts.length} limit={limit} page={page} setPage={setPage} />
    </Layout>
  );
};

export default Posts;

const Layout = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;
