//import './App.css';
import All from './Component/All';
import Navigation from './Component/Navigation';
import {Routes, Route} from 'react-router-dom';
import MovieList from './Component/MovieList';
import Home from './Component/Home';
import bootstrap from 'bootstrap';
{/*import MovieList from './Component/MovieList';
import AddMovie from './Component/AddMovie';


function App() {
  const [movie, setMovie] = useState([{
    id: 1,
    name: "Mulan",
    posterurl:
    "https://img.reblog.hu/blogs/50594/img_5e6a8e536521a.jpeg?w=640",
    description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    rating: 5,
    },
    {
    id: 2,
   
    name: "Guerriers",
    posterurl:
    "https://i.pinimg.com/564x/dd/a5/c4/dda5c441f50760c97b2805f36235bee8.jpg",
    description:
    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden",
    rating: 4,
    },
    {
    id: 3,
   
    name: "Eternels",
    posterurl:
    "https://lh3.googleusercontent.com/proxy/inrQTA-UCZtBDOnhAKiz_nlJlWnSjJjFBzGQCmaXBXs5WWoEqke_VnoOnOeX_I-9QL4uVT6hPQ1jdd4zkQK-VGW_9_X3aJVWKBLykx4poIOfZ8cSFCSNF4T4LZQon1JiwzbG80r46NxhWAj7EaymrkVijA",
    description:
    "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    rating: 2,
    },
    {
    id: 4,
   
    name: "Night Raiders",
    posterurl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIqjZo3ZNSca6tKKqu862rG4U2PND-QPnL_Q&usqp=CAU",
    description:
    "Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son.",
    rating: 3,
    },
    {
    id: 5,
   
    name: "Her deadly BoyFriend",
    posterurl:
    "https://www.filmfrancais.net/uploads/posts/covers/ton-petit-ami-doit-mourir.jpg",
    description:
    "Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    rating: 5,
    },
    {
    id: 6,
   
    name: "Warcraft",
    posterurl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaqCQ-YdF4rzd7653ffO16XGQ9YXGyIjVGUw&usqp=CAU",
    description:
    "A few human survivors must team up with a group of dissenting Orcs to stop an Orc horde from invading their planet through a magic portal.",
    rating: 1,
    }])
    let addNewMovie=(newMovie)=>{setMovie([...movie,newMovie])
    }*/}

function App() {
    
  return (
    <div className="App">
      {/*<header className="App-header">
       <AddMovie myMovie={addNewMovie}/>
       <Navigation/>
       <All/>
      </header>
      <div>
        
       <MovieList movie={movie}/>
      </div>*/}
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/addmovies' element={<All/>} />
        <Route path='/listfilms' element={<MovieList/>} />
      </Routes>
    </div>
  );
}

export default App;
