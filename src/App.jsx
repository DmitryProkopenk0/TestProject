import React from 'react'
import Header from './components/navbar'
import UnderNav from './components/underNav'
import TaskItem from './components/items/taskItem'
import TaskItem2 from './components/items/taskItem2'
import TaskItem3 from './components/items/taskItem3'
import './styles/global.scss'
import SideBar from './components/sidebar'
import SubNav from './components/subnav'
function App() {
  return (
    <div className="App">
      <SubNav/>
      <Header/>
      <UnderNav/>
      <main className='container-fluid'>
        <TaskItem className='col-md-4'/>
        <TaskItem2 className='col-md-4'/>
        <TaskItem3 className='col-md-4'/>
      </main>
      <SideBar/>
    </div>
  );
}

export default App;
