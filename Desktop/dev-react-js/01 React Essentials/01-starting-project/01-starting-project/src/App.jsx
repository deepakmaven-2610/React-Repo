import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';
import {CORE_CONCEPTS} from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';
import { EXAMPLES } from './data.js';




// function CoreConcept(props)
// {
//   return (
//     <li>
//       <img src={props.image} alt={props.title}/>
//       <h3> {props.title} </h3>
//       <p> {props.description} </p>
//     </li>
//   );
// }


function App() {
  //const [selectedTopic, setSelectedTopic] = useState('components');
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedButton)
    {
      //selected button -> Components, JSX, Props, State
      setSelectedTopic(selectedButton)
      // console.log(selectedTopic);
        
    }
    let tabContent= <p> Please Select a Option</p>
    if (selectedTopic) 
    {
      tabContent=(
        <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}           
          </code>
        </pre>
        </div>
      )  
    }
    //after conditional statement line just write {tabContent}

  return (
    <div>
      <Header></Header>
      <main>
       <section id='core-concepts'>
        <h2> Core Concepts </h2>
        <ul>
          {/* <CoreConcept  first way
          title="Components"
          description="The core UI building blocks"
          image={componentsImg}
          /> */}

          {/* <CoreConcept                     
          title={CORE_CONCEPTS[0].title}              second way
          description={CORE_CONCEPTS[0].description}
          image={CORE_CONCEPTS[0].image}
          />

          <CoreConcept
          {...CORE_CONCEPTS[1]}             third way
          />
          <CoreConcept
          {...CORE_CONCEPTS[2]}
          />
          <CoreConcept
         {...CORE_CONCEPTS[3]}
          /> */}
          
          {/* fourth way */}
          {CORE_CONCEPTS.map((conceptItem => (<CoreConcept key={conceptItem.title} {...conceptItem}/>
          )))}
        </ul>
       </section>
       <section id = "examples">
        <h2> Examples </h2>
        <menu>
          <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleClick('components')}>Component</TabButton>
          <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleClick('jsx')}>JSX</TabButton>
          <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleClick('props')}>Props</TabButton>
          <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleClick('state')}>State</TabButton>
        </menu>
        {/* conditonal statement */}
        {!selectedTopic && <p> Please Select a Topic </p>}
        {selectedTopic &&(
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
              {EXAMPLES[selectedTopic].code}
            </code>
          </pre>
        </div>
        )}
        {/* //another way is shown above */}
       </section>

      </main>
    </div>
  );
}

export default App;
