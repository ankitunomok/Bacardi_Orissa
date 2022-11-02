import './App.css';
import { setAxiosDefault } from './axiosDefaults';
import { AppRoutes } from './routes';

function App() {
  setAxiosDefault()
  return (
    <div>
      <AppRoutes />
    </div>
  );
}

export default App;
