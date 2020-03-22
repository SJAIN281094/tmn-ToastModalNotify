import React, { useState } from 'react';
import { ToastPortal, ToastContainer, Toast } from './Toast';

function App(){
	const [isToast, setIsToast] = useState(true);
	const [isModal, setIsModal] = useState(true);

	const toggleToast = () => {
		setIsToast(!isToast);
	}

	const toggleModal = () => {
		setIsModal(!isModal);
	}

	return(
		<>
			{ isToast &&
				<ToastPortal>
					<ToastContainer horizontalAlign="center" verticalAlign="top">
						<Toast.Error toggleToast={toggleToast} close={true} slideTop={true}>
							<div>Error</div>
							<div>asdhgfhg !!</div> </Toast.Error>
					</ToastContainer>
				</ToastPortal>	
			}
			<button onClick={()=>{toggleToast()}}> Toast </button>
			<button onClick={()=>{toggleModal()}}> Modal </button>
		</>
	)
}

export default App;