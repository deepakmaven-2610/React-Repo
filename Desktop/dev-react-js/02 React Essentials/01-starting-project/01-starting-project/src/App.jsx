import CoreConcepts from './components/CoreConcepts.jsx';
import Header from './components/Header/Header.jsx';
import Examples from './components/Example.jsx';


function App() {
  return (
    <>
      <Header></Header>

      <main>
       <CoreConcepts/>
       <Examples />
      </main>
      
    </>
  );
}

export default App;
