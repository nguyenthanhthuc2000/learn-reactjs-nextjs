import dynamic from 'next/dynamic';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LazyLoadComponent from '@/components/LazyLoadComponent';
import NewsList from '@/components/NewsList';
import DynamicComponent from '@/components/DynamicComponent';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Welcome to the Home Page</h1>
        <NewsList />
        <LazyLoadComponent>
          <DynamicComponent />
        </LazyLoadComponent>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
