import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './src/routes/AppRoutes';
import Header from './src/components/Header/Header';
import Footer from './src/components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-grow">
          {}

          {/* Agora o AppRoutes controla qual componente é exibido */}
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;