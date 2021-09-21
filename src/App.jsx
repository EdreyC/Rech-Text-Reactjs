import './App.css';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function App() {

  return (
    <div className="App">
      <div className="container">
        <img className="my-photo" src="https://avatars.githubusercontent.com/u/83123090?v=4" alt="" ></img>
        <h1 className="blinker">Hello! Welcome!<br /> 
        This is a Editor Text ✍</h1> 
      
        <Editor></Editor>
        </div>
 
        <a className="link"href="https://github.com/EdreyC">Back to my Github</a>

    </div>
    
  );
  }

export default App;
