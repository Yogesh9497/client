// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddPost from './components/AddPost';
// import Login from './components/Login';
import NewPost from './components/NewPost';
import PostForm from './components/PostForm';
import RedditNavbar from './components/RedditNavbar';
import RedditRightSidebar from './components/RedditRightSidebar';
import RedditSidebar from './components/RedditSidebar';
import SideFooter from './components/SideFooter';
// import PostData from './components/PostData';

function App() {
  return (
    <div className="App">
      <RedditNavbar/>
      <div className='d-flex justify-content-around'>
        <div className='mt-4'><RedditSidebar/></div>
        <div>
        <PostForm/>
      <AddPost/>
      <NewPost/>
        </div>
        <div className='mt-4'>
          <RedditRightSidebar/>
          <SideFooter/>
          </div>
      </div>
      
      {/* <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter> */}
      
    </div>
  );
}

export default App;
