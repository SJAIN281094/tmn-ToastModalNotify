import React from 'react';
import styled from 'styled-components';
import styles from './style';

function ToastPrototype({children, className, close, ...props}){
  return(
    <div className={className} {...props}>
      {close && <div className="toast-close" onClick={()=>{props.toggleToast()}}>X</div>}
      {children}
    </div>
  ) 
}

export const Toast = {
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
  bgColor: "#dc3545",
};

Toast.Success = styled(Toast.Success)`${styles}`;
Toast.Success.defaultProps = {
  bgColor: "#28a745",
};

Toast.Warn = styled(Toast.Warn)`${styles}`;
Toast.Warn.defaultProps = {
  bgColor: "#ffc107",
};

Toast.Info = styled(Toast.Info)`${styles}`;
Toast.Info.defaultProps = {
  bgColor: "#17a2b8",
};

Toast.Log = styled(Toast.Log)`${styles}`;
Toast.Log.defaultProps = {
  bgColor: "#007bff",
};

export default Toast;