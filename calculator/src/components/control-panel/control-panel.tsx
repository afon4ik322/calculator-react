import { useAppDispatch } from '../../store';
import { clearHistory } from '../../store/slices/history-slice';

const ControlPanelFC = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <button onClick={() => dispatch(clearHistory())}>Clear All History</button>
    </>
  );
};

export default ControlPanelFC;
