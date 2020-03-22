import React from 'react';
import styled from 'styled-components';
import styles from './style';

function ToastContainer({children, className}){	
	return(
		<div className={className}>
			{children}
		</div>
	)
}

export default styled(ToastContainer)`${styles}`;