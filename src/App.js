import './App.css';
import Sidebar from './Sidebar';
import Feed from "./Feed.js"
import Widgets from './Widgets';
function App() {
  return (
    <div className="app">
      
      {/* side bar */}
      <Sidebar/>
        

        {/* feed */}
        <Feed/>
        
   {/* widgets */}
   <Widgets/> 
    </div>
  );
}

export default App;
