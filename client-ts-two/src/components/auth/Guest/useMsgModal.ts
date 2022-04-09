import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actions as actionsError } from '../../../store/error/error';
import { selectIsAuthenticated } from '../../../store/auth/selectors';
import { selectError } from '../../../store/error/selectors';
import { Msg } from '../../../store/auth/enumMsg';

export const useMsgModal = (errorMsg: Msg) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const error = useSelector(selectError);

  const [modal, setModal] = useState(false);
  const [msg, setMsg] = useState(null);

  const handleToggle = useCallback(() => {
    dispatch(actionsError.clearErrors());
    setModal(!modal);
  }, [dispatch, modal]);

  useEffect(() => {
    if (error.id === errorMsg) {
      setMsg(error.msg.msg);
    } else {
      setMsg(null);
    }
    if (modal) {
      if (isAuthenticated) {
        handleToggle();
      }
    }
  }, [error, errorMsg, handleToggle, isAuthenticated, modal]);
  return { msg, modal, handleToggle };
};
