import { Header, Footer } from '../index';
import { Outlet } from 'react-router-dom';
import styles from './styles.module.scss';

export const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
