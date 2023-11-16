import reactImg from '../../assets/react-core-concepts.png'; // we have used 2 .. to first go one level up as we are now inside src folder
import './Header.css'
//dynamic content
const reactDescription = ['Fundamental','Crucial','Core'];

function genRandomInt(max)
{
  return Math.floor(Math.random() * (max + 1))
}


export default function Header()
{
  const description = reactDescription[genRandomInt(2)]
  return   (
    <header>
    {/* <img src="src/assets/react-core-concepts.png" alt="Stylized atom" /> */}
    <img src={reactImg} alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {/* Fundamental React concepts you will need for almost any app you are
      going to build! */}
      {description} React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>
);
}