import logo from './logo.svg';
import './App.css';
import GetApiFunction from './api/getAPI';
import PostApiFunction from './api/postAPI';
import DeleteApiFunction from './api/deleteAPI';
import PutApiFunction from './api/putAPI';


function App() {
  return (
    <div className="App">
      <GetApiFunction />
      <PostApiFunction />
      <DeleteApiFunction />
      <PutApiFunction />
    </div>
  );
}

export default App;
