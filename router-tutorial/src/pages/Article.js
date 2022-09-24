import { useParams } from 'react-router-dom';

const Article = () => {
  const { id } = useParams();
  return <div> 게시글 {id}</div>;
};

export default Article;
