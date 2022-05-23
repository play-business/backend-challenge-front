import './App.css';
import Checkout from './components/Checkout';

function App() {
  return (
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <p className="text-3xl text-gray-700 font-bold mb-5">
        Play Business
      </p>
      <p className="text-gray-500 text-lg mb-4">
        Selecciona el monto que deseas invertir
      </p>
      <Checkout></Checkout>
    </div>
  );
}

export default App;
