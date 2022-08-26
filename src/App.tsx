import Introduction from '@/components/sections/Introduction/Introduction';
import Statistics from '@/components/sections/Statistics/Statistics';
import Navbar from '@/components/ui/Navbar/Navbar';

import Business from './components/sections/Business/Business';
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
        <Business />
      </div>
    </div>
  );
};

export default App;
