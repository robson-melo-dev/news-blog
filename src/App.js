import './App.css';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query'
import Form from './components/Form';
import PostsInShorts from './components/PostsInShorts';

const queryclient = new QueryClient()

function App() {
  return (
    <div className="App">
      <QueryClientProvider client = {queryclient}>
      <PostsInShorts/>
      <Form/>
      </QueryClientProvider>
    </div>
  );
}

export default App;
