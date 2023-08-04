
import './App.css'
import logo from './imagenes/logo.png'
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='logo-contenedor'>
        <img 
        src={logo}
        className='logo' />
      </div>
      <div className= 'tareas-lista-principal'>
        <h2>Mis tareas</h2>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App
