import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { userSlice } from '../store/user';


const Index: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const handleConfirm = () => {
    console.log(user);
  };

  const handleUpdate = () => {
    dispatch(
      userSlice.actions.updateUser({
        name: 'name',
        age: 28,
        email: 'email',
        token: 'token',
        history: []
      })
    );
  };

  const handleReset = () => {
    dispatch(userSlice.actions.reset());
  };

  const handleAddHistory = () => {
    dispatch(userSlice.actions.addHistory('push'));
  };

  return (
    <div>
      <h1>store動作確認</h1>
      <button type="button" onClick={handleConfirm}>
        確認
      </button>

      <button type="button" onClick={handleUpdate}>
        Update
      </button>

      <button type="button" onClick={handleReset}>
        Reset
      </button>

      <button type="button" onClick={handleAddHistory}>
        AddHistory
      </button>
    </div>
  );
};

export default Index;
