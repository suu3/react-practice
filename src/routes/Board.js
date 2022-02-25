import { Route } from 'react-router-dom';
import PostList from './Board/PostList';
import PostDetail from './Board/PostDetail';
import PostAdd from './Board/PostAdd';

function Board() {
  return (
      <>
        <Route path='/Board/postDetail/:no' exact component={PostDetail} />
        <Route path='/Board/postList' exact component={PostList} />
        <Route path='/Board/postAdd' exact component={PostAdd} />
      </>
  );
}

export default Board;