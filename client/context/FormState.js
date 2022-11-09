import { createContext, useState } from "react";

const FormContext = createContext()

const FormState = (props) => {

	const [formData, setFormData] = useState({
		name: '', dob: '', weight: '', height: '', otherIllness: '', gender: '', allergies: '', reason: '', medications: ''
	})

	return (
		<FormContext.Provider value={ { formData, setFormData } }>
			{ props.children }
		</FormContext.Provider>
	)
}

export {
	FormState, FormContext
}