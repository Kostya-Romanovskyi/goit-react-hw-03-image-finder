import { ThreeDots } from 'react-loader-spinner';
import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.loader}>
      <ThreeDots color="#4a5699" />;
    </div>
  );
}
