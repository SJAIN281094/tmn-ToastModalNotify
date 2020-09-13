import React, { useEffect } from 'react';
import styled from 'styled-components';
import styles from './style';
import {ReactComponent as CloseIcon} from '../assets/icons/close.svg';

function ToastPrototype({children, className, closebtn, autoClose, toggletoast, ...props}){
  
  useEffect(()=>{
    if(autoClose && toggletoast){
      setTimeout(()=>{
        toggletoast();
      }, autoClose * 1000);
    }
  }, [autoClose, toggletoast])
  
  return(
    <div className={className} {...props}>
      {closebtn && <div className="toast-close" onClick={()=>{toggletoast()}}><CloseIcon/></div>}
      {children}
    </div>
  ) 
}

const Toast = {
  Error: function ToastError(props) {
      return(
        <ToastPrototype {...props} />
      )
  },

  Success: function ToastSuccess(props) {
    return(
      <ToastPrototype {...props} />
    ) 
  },

  Warn: function ToastSuccess(props) {
    return(
      <ToastPrototype {...props} />
    ) 
  },

  Info: function ToastSuccess(props) {
    return(
      <ToastPrototype {...props} />
    ) 
  },

  Log: function ToastSuccess(props) {
    return(
      <ToastPrototype {...props} />
    ) 
  }
}


Toast.Error = styled(Toast.Error)`${styles}`;
Toast.Error.defaultProps = {
  bgcolor: "#dc3545",
};

Toast.Success = styled(Toast.Success)`${styles}`;
Toast.Success.defaultProps = {
  bgcolor: "#28a745",
};

Toast.Warn = styled(Toast.Warn)`${styles}`;
Toast.Warn.defaultProps = {
  bgcolor: "#ffc107",
};

Toast.Info = styled(Toast.Info)`${styles}`;
Toast.Info.defaultProps = {
  bgcolor: "#17a2b8",
};

Toast.Log = styled(Toast.Log)`${styles}`;
Toast.Log.defaultProps = {
  bgColor: "#007bff",
};

export default Toast;