import './App.css';
import Posts from './components/Posts';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query'

const queryclient = new QueryClient()

function App() {
  return (
    <div className="App">
      <QueryClientProvider client = {queryclient}>
      <Posts/>
      </QueryClientProvider>
    </div>
  );
}

export default App;
