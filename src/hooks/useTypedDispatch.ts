import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';

export default function useTypedDispatch() {
  return useDispatch<AppDispatch>();
}
