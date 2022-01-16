import './App.css';
import ListComponent from './Components/ListComponent.js'
import PostDetailsComponent from './Components/PostDetailsComponent';
import AddPostComponent from './Components/AddPostComponent';
import {
  Routes,
  Route
} from "react-router-dom";

const defaultPath = "https://localhost:7015/api/posts";

function App() {
  return (
    <div className="App">
    <div>
    <Routes>
      <Route path="/" element={<ListComponent />} />
      <Route path="/posts/:id" element={<PostDetailsComponent />} />
      <Route path="/addPost" element={<AddPostComponent />} />
    </Routes>
    </div>
    </div>
    
  );
}

export default App;
export {defaultPath};
