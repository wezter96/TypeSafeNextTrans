import useTypedSelector from '../../hooks/useTypedSelector';
import { decrement, increment } from '../../store/slices/counter';
import useTypedDispatch from '../../hooks/useTypedDispatch';

function CounterComponent(): JSX.Element {
  const { value } = useTypedSelector((state) => state.counter);
  const dispatch = useTypedDispatch();


  return (
    <article>
      <header>
        Count is {value}
      </header>
      <footer>
        <button onClick={() => {dispatch(increment(1))}} type="button">Increment</button>
        <button onClick={() => {dispatch(decrement(1))}} type="button">Decrement</button>
      </footer>
    </article>
  );
}

export default CounterComponent;
