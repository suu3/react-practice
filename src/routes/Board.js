import { Route } from 'react-router-dom';
import PostList from './Board/PostList';
import PostView from './Board/PostView';

function Board() {
  return (
      <>
        <Route path='/Board/postView/:no' exact component={PostView} />
        <Route path='/Board/postList' exact component={PostList} />
      </>
  );
}

export default Board;