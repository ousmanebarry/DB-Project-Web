import "./subViews.css";
import dayjs from "dayjs"

let user = {
	first: null,
	middle: null,
	last: null,
	email: null,
	password: "hotel123",
	housenumber: null,
	street: null,
	city: null,
	province: "Ontario",
	dateOfBirth: null,
	checkInDate: null,
	checkOutDate: null,
	phonenumbers: [],
    branch: null,
	rating: 1,
	roomPreferences: null,
};



const AddCustomer = () => {

	return (
		<div className='AddCustomer subViewOutline m-5 '>
			<div>
				<div className='row m-5 '>
					<div className='col subViewTitle text-center'>Booking</div>
				</div>

				<form className='m-5' >
					<div className='row mt-5 mb-5 bold'>
						<div className='col subtitle '>Customer Information</div>
					</div>

					<div className='form-group row'>
						<label className='col-6 col-form-label'>First Name</label>
						<div className='col-6'>
							<input
								onChange={(e) => (user.first = e.target.value)}
								type='text'
								className='form-control'
								required='required'
							/>
						</div>
					</div>
					<div className='form-group row'>
						<label className='col-6 col-form-label'>Middle Name</label>
						<div className='col-6'>
							<input
								onChange={(e) => (user.middle = e.target.value)}
								className='form-control'
							/>
						</div>
					</div>
					<div className='form-group row'>
						<label className='col-6 col-form-label'>Last Name</label>
						<div className='col-6'>
							<input
								onChange={(e) => (user.last = e.target.value)}
								className='form-control'
								required='required'
							/>
						</div>
					</div>

					<div className='form-group row'>
						<label className='col-6 col-form-label'>Email</label>
						<div className='col-6'>
							<input
								onChange={(e) => (user.email = e.target.value)}
								type='email'
								className='form-control'
								required='required'
							/>
						</div>
					</div>

					<div className='form-group row'>
						<label className='col-6 col-form-label'>
							Phone number
						</label>
						<div className='col-6'>
							<input
								onChange={(e) =>
									(user.phonenumbers = e.target.value.split(","))
								}
								type='text'
								className='form-control'
								required='required'
							/>
						</div>
					</div>

					<div className='form-group row'>
						<label className='col-6 col-form-label'>Date of Birth</label>
						<div className='col-6'>
							<input
								onChange={(e) => (user.dateOfBirth = e.target.value)}
								type='date'
								className='form-control'
								required='required'
								max = {dayjs().format("YYYY-MM-DD")}
							/>
						</div>
					</div>

                    <div className='form-group row'>
						<label className='col-6 col-form-label'>Hotel Branch</label>
						<div className='col-6'>
							<input
								type='text'
								className='form-control'
								required='required'
								onChange={(e) => (user.branch = e.target.value)}>
							</input>
						</div>
					</div>

					<div className='form-group row'>
						<label className='col-6 col-form-label'>Hotel Rating</label>
						<div className='col-6'>
							<input
								type='text'
								className='form-control'
								required='required'
								onChange={(e) => (user.rating = e.target.value)}>
							</input>
						</div>
					</div>

					<div className='form-group row'>
						<label className='col-6 col-form-label'>Room Preferences</label>
						<div className='col-6'>
						<input
								type='text'
								className='form-control'
								required='required'
								onChange={(e) => (user.roomPreferences = e.target.value)}>
							</input>
						</div>
					</div>

					<div className='form-group row'>
						<label className='col-6 col-form-label'>Check-in Date</label>
						<div className='col-6'>
							<input
								onChange={(e) => (user.checkInDate = e.target.value)}
								type='date'
								className='form-control'
								required='required'
								max = {dayjs().format("YYYY-MM-DD")}
							/>
						</div>
					</div>

					<div className='form-group row'>
						<label className='col-6 col-form-label'>Check-out Date</label>
						<div className='col-6'>
							<input
								onChange={(e) => (user.checkOutDate = e.target.value)}
								type='date'
								className='form-control'
								required='required'
								max = {dayjs().format("YYYY-MM-DD")}
							/>
						</div>
					</div>

					<div className='row mt-5 mb-5 bold'>
						<div className='col subtitle '>Customer Address</div>
					</div>

					<div className='form-group row'>
						<label className='col-6 col-form-label'>House Number</label>
						<div className='col-6'>
							<input
								onChange={(e) => (user.housenumber = e.target.value)}
								type='number'
								className='form-control'
								required='required'
								min='1'
							/>
						</div>
					</div>
					<div className='form-group row'>
						<label className='col-6 col-form-label'>Street</label>
						<div className='col-6'>
							<input
								onChange={(e) => (user.street = e.target.value)}
								className='form-control'
								required='required'
							/>
						</div>
					</div>
					<div className='form-group row'>
						<label className='col-6 col-form-label'>City</label>
						<div className='col-6'>
							<input
								onChange={(e) => (user.city = e.target.value)}
								className='form-control'
								required='required'
							/>
						</div>
					</div>
					<div className='form-group row'>
						<label className='col-6 col-form-label'>Province</label>
						<div className='col-6'>
							<select
								id='select'
								name='select'
								className='custom-select'
								required='required'
								onChange={(e) => (user.province = e.target.value)}>
								<option value='Alberta'>Alberta</option>
								<option value='British Columbia'>British Columbia</option>
								<option value='Manitoba'>Manitoba</option>
								<option value='New Brunswick'>New Brunswick</option>
								<option value='Newfoundland and Labrador'>
									Newfoundland and Labrador
								</option>
								<option value='Northwest Territories'>
									Northwest Territories
								</option>
								<option value='Nova Scotia'>Nova Scotia</option>
								<option value='Nunavut'>Nunavut</option>
								<option value='Ontario'>Ontario</option>
								<option value='Prince Edward Island'>
									Prince Edward Island
								</option>
								<option value='Quebec'>Quebec</option>
								<option value='Saskatchewan'>Saskatchewan</option>
								<option value='Yukon'>Yukon</option>
							</select>
						</div>
					</div>

					<div className='form-group row'>
						<div className='offset-6 col-6'>
							<button name='submit' type='submit' className='btn btn-primary'>
								Confirm Booking
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);

};

export default AddCustomer;
