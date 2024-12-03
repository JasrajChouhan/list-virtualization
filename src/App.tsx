import { QueryClientProvider } from '@tanstack/react-query';
import { Layout } from './components/Layout';
import { queryClient } from './lib/react-query';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout />
    </QueryClientProvider>
  );
}

export default App;
