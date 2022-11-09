import React, { useContext } from 'react'
import { FormContext } from '../context/FormState'
import web3 from '../config/web3'
import medicalRecords from '../medicalRecords'

const Form = () => {

	const { formData, setFormData } = useContext(FormContext)

	const saveMedicalRecords = async (data) => {
		await medicalRecords
			.methods
			.saveMedicalRecords(
				data.name,
				data.dob,
				data.weight,
				data.height,
				data.otherIllness,
				data.gender,
				data.reason,
				data.allergies,
				data.medications
			)
	}

	const getMedicalRecord = async (patientName) => {
		const patientRecord = await medicalRecords
			.methods
			.getMedicalRecord(patientName)

		console.log(patientRecord)
	}

	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
		console.log(formData)
	}

	return (
		<>
			<h3 className='text-xl'>PATIENT INFORMATION</h3>
			<div className="flex flex-wrap">
				<div className="p-2 w-2/5">
					<label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
					<input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={onChange} />
				</div>
				<div className="p-2 w-1/5">
					<label htmlFor="dob" className="leading-7 text-sm text-gray-600">Birth Date</label>
					<input type="Date" id="dob" name="dob" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={onChange} />
				</div>
				<div className="p-2 w-1/5">
					<label htmlFor="weight" className="leading-7 text-sm text-gray-600">Weight  (kg's)</label>
					<input type="text" id="weight" name="weight" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={onChange} />
				</div>
				<div className="p-2 w-1/5">
					<label htmlFor="height" className="leading-7 text-sm text-gray-600">Height (cm's)</label>
					<input type="text" id="height" name="height" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={onChange} />
				</div>


				<div className="p-2 w-2/5">
					<label htmlFor="otherIllness" className="leading-7 text-sm text-gray-600">Other Illnesses</label>
					<textarea rows={5} cols={30} id="otherIllness" name="otherIllness" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out resize-none" onChange={onChange} />
				</div>

				<div className="p-2 w-1/5">
					<legend className='leading-7 text-sm text-gray-600'>Gender</legend>
					<div className="flex flex-col w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8">
						<div className="flex space-x-2">
							<input id="male" className="peer/male" type="radio" name="gender" value={'male'} onChange={onChange} />
							<label htmlFor="male" className="peer-checked/male:text-indigo-500 accent-indigo-500">Male</label>
						</div>

						<div className="flex space-x-2">
							<input id="female" className="peer/female" type="radio" name="gender" value={'female'} onChange={onChange} />
							<label htmlFor="female" className="peer-checked/female:text-indigo-500 accent-indigo-500">Female</label>
						</div>

						<div className="flex space-x-2">
							<input id="other" className="peer/other" type="radio" name="gender" value={'other'} onChange={onChange} />
							<label htmlFor="other" className="peer-checked/other:text-indigo-500 accent-indigo-500">Other</label>
						</div>
					</div>
				</div>
			</div>

			<h3 className='text-xl'>PATIENT MEDICAL HISTORY</h3>
			<div className="flex flex-wrap">
				<div className="p-2 w-1/3">
					<label htmlFor="allergies" className="leading-7 text-sm text-gray-600">Please list any Allergies</label>
					<textarea rows={3} cols={40} id="allergies" name="allergies" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out resize-none" onChange={onChange} />
				</div>

				<div className="p-2 w-1/3">
					<label htmlFor="reason" className="leading-7 text-sm text-gray-600">Reason for seeing the doctor</label>
					<textarea rows={3} cols={40} id="reason" name="reason" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out resize-none" onChange={onChange} />
				</div>

				<div className="p-2 w-1/3">
					<label htmlFor="medications" className="leading-7 text-sm text-gray-600">Please list your Current Medications</label>
					<textarea rows={3} cols={40} id="medications" name="medications" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out resize-none" onChange={onChange} />
				</div>
			</div>
		</>
	)
}

export default Form