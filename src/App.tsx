import Billing from '@/components/sections/Billing/Billing';
import Business from '@/components/sections/Business/Business';
import CardDetail from '@/components/sections/CardDetail/CardDetail';
import Feedback from '@/components/sections/Feedback/Feedback';
import Introduction from '@/components/sections/Introduction/Introduction';
import Statistics from '@/components/sections/Statistics/Statistics';
import Testimonials from '@/components/sections/Testimonials/Testimonials';
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
        <Business />
        <Billing />
        <CardDetail />
        <Testimonials />
        <Feedback />
      </div>
    </div>
  );
};

export default App;
