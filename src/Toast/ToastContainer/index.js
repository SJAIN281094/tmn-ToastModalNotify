import React from 'react';
import styled from 'styled-components';
import styles from './style';

function ToastContainer({children, className, ...props}){	

	return(
		<div className={className} {...props}>
			{children}
		</div>
	)
}

export default styled(ToastContainer)`${styles}`;