import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setRole } from './authSlice';

const RoleSwitcher = () => {
  const dispatch = useAppDispatch();
  const role = useAppSelector((state) => state.auth.role);

  return (
    <select
      value={role}
      onChange={(e) => dispatch(setRole(e.target.value))}
      className="border p-2 rounded"
    >
      <option value="viewer">Viewer</option>
      <option value="admin">Admin</option>
    </select>
  );
};

export default RoleSwitcher;