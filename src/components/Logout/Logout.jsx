import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut, userCurrent } from 'redux/auth/authService';
import { ModalApproveAction } from 'components/ModalApproveAction/ModalApproveAction';

import { LogOut } from '../buttons/buttons';
import { notify } from 'helpers/notification';

export const Logout = () => {
  const [isLogOut, setIsLogOut] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(userCurrent());
  }, [dispatch]);

  const handleLogOut = () => {
    setIsLogOut(true);
    
  };

  const handleLogOutCancel = () => {
    setIsLogOut(false);
  };

  const handleLogOutYes = async () => {
    try {
      dispatch(logOut());
      setIsLogOut(false);
      navigate('/');
      notify('info', 'You have successfully logged out');
    } catch (error) {
      notify('error', "Sorry, something wrong. Please try again");
    }
  };

  return (
    <>
      <LogOut onClick={handleLogOut} />

      {isLogOut && (
        <ModalApproveAction
          onActivate={handleLogOutYes}
          onClick={handleLogOutCancel}
          variant={'logOut'}
        /> 
      )}
    </>
  );
};
