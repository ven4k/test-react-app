import styles from './App.module.scss';
import {Header} from './Header/Header';
import {MainPage} from './MainPage/MainPage';
const App = () => {
  return (
  <div className={styles.appWrapper}>
    <Header />
    <MainPage />
  </div>
  );
}

export default App;
