import Introduction from '@/components/sections/Introduction/Introduction';
import Statistics from '@/components/sections/Statistics/Statistics';
import Navbar from '@/components/ui/Navbar/Navbar';

import styles from './styles/App.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <header className={styles.wrapper}>
          <Navbar />
        </header>
        <Introduction />
        <Statistics />
      </div>
    </div>
  );
};

export default App;
