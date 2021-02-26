
import './App.css';
import Counter from './components/Counter'
import ApiFetch from './components/ApiFetch'

function App() {
  return (
    <div className="App">
      <Counter initalNumber={0} />
      <ApiFetch userName={'Scott95100'}/>
      
     
    </div>
  );
}

export default App;
