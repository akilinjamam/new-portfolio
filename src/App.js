import { Route, Routes } from 'react-router';
import './App.css';
import Home from './Components/home/Home';
import ControlPanel from './Components/admin/ControlPanel'
import CreateProject from './Components/admin/CreateProject/CreateProject';
import Experience from './Components/admin/experience/Experience';
import Skill from './Components/admin/skill/Skill';
import Blog from './Components/admin/blog/Blog';
import AllProjects from './Components/admin/CreateProject/AllProjects';
import SingleProject from './Components/admin/CreateProject/SingleProject';
import EditProject from './Components/admin/CreateProject/EditProject';
import CreateSkill from './Components/admin/skill/CreateSkill';
import SingleSkill from './Components/admin/skill/SingleSkill';
import EditSkill from './Components/admin/skill/EditSkill';
import CreateBlog from './Components/admin/blog/CreateBlog';
import EditBlog from './Components/admin/blog/EditBlog';
import SingleBlog from './Components/admin/blog/SingleBlog';
import ProjectDetail from './Components/Projects/ProjectDetail';
import AllProjectsClient from './Components/Projects/AllProjectClient';

function App() {



  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='project-detail/:id' element={<ProjectDetail />} />
        <Route path='allProjectClient' element={<AllProjectsClient />} />
        <Route path='/controll-panel' element={<ControlPanel />}>
          <Route index element={<AllProjects />} />
          <Route path='exp' element={<Experience />} />
          <Route path='skill' element={<Skill />} />
          <Route path='blog' element={<Blog />} />
          <Route path='create-project' element={<CreateProject />} />
          <Route path='create-skill' element={<CreateSkill />} />
          <Route path='create-blog' element={<CreateBlog />} />
          <Route path='single-project/:id' element={<SingleProject />} />
          <Route path='single-skill/:id' element={<SingleSkill />} />
          <Route path='single-blog/:id' element={<SingleBlog />} />
          <Route path='edit-project/:id' element={<EditProject />} />
          <Route path='edit-skill/:id' element={<EditSkill />} />
          <Route path='edit-blog/:id' element={<EditBlog />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;


// ssl ecommerec server side link:
// https://github.com/ProgrammingHero1/ssl-commerz-server-side

// ssl ecommerce client side link:
// https://github.com/ProgrammingHero1/ssl-commerz-client-side