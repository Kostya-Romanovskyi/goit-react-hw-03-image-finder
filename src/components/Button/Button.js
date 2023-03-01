import css from './Button.module.css';

export default function Button({ incrimentPage }) {
  return (
    <button onClick={incrimentPage} className={css.Button} type="button">
      Load more
    </button>
  );
}
