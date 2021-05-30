import React from "react";
import validate from "./validateInfoRegister";
import useForm from "./useFormRegister";
import "./FormRegister.css";
import { NavLink } from "react-router-dom";

const Register = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto mb-2">
            <div className="formr-content-right">
              <form onSubmit={handleSubmit} className="formr" noValidate>
                <h1 className="firsth1">Get started</h1>

                <div className="formr-inputs">
                  <div className="row">
                    <div className="col-md-9">
                      <label className="formr-label">Full name</label>
                      <input
                        className="formr-input"
                        type="fullname"
                        name="fullname"
                        placeholder="Enter your Full name"
                        value={values.fullname}
                        onChange={handleChange}
                      />
                      {errors.fullname && <p>{errors.fullname}</p>}
                    </div>
                    <div className="mb-3 col-md-3">
                      <label className="formr-label">Date of Birth</label>
                      <input
                        className="formr-input"
                        rows="1"
                        type="date"
                        name="dob"
                        value={values.dob}
                        onChange={handleChange}
                      />
                      {errors.dob && <p>{errors.dob}</p>}
                    </div>
                  </div>
                </div>
                <div className="formr-inputs mt-1">
                  <legend class="formr-label pt-0">Gender</legend>
                  <div>
                    <div class="formr-check form-check-inline">
                      <input
                        class="formr-check-input"
                        type="radio"
                        name="gender"
                        value="male"
                        id="inlineCheckbox1"
                        onChange={handleChange}
                      />
                      <label
                        class="formr-check-label pt-1"
                        for="inlineCheckbox1"
                      >
                        &nbsp;&nbsp;Male
                      </label>
                    </div>
                    <div class="formr-check form-check-inline">
                      <input
                        class="formr-check-input"
                        type="radio"
                        name="gender"
                        value="female"
                        id="inlineCheckbox1"
                        onChange={handleChange}
                      />
                      <label
                        class="formr-check-label pt-1"
                        for="inlineCheckbox2"
                      >
                        &nbsp;&nbsp;Female
                      </label>
                    </div>
                    {errors.gender && <p>{errors.gender}</p>}
                  </div>
                </div>
                <div className="formr-inputs mt-2">
                  <div class="input-group" className="mb-3 col-md-4">
                    <label class="formr-label" className="formr-label">
                      Profile Photo
                    </label>
                    <input
                      type="file"
                      class="formr-control"
                      className="formr-label"
                      id="inputGroupFile04"
                      aria-describedby="inputGroupFileAddon04"
                      aria-label="Upload"
                      name="profilephoto"
                      value={values.profilephoto}
                      onChange={handleChange}
                    />
                    {errors.profilephoto && <p>{errors.profilephoto}</p>}
                  </div>
                 
                </div>
                <hr />
                <h1>Communication Details</h1>
                <div className="formr-inputs mt-2">
                  <div className="col-md-12">
                    <label className="formr-label">Current Address</label>
                    <textarea
                      className="formr-input"
                      type="address"
                      name="address"
                      placeholder="Plot no,society,street"
                      value={values.address}
                      onChange={handleChange}
                    />
                    {errors.address && <p>{errors.address}</p>}
                  </div>
                </div>
                <div className="formr-inputs mt-2">
                <div className='row'>
                    <div className='mb-3 col-md-4'>
                        <label class='formr-label' className='formr-label'>
                            City
                        </label>
                        <input
                        class='formr-control'
                        className='formr-input'
                        id='exampleFormContrlTextarea1'
                        rows='1'
                        name="city"
                        onChange={handleChange}
                        value={values.city}/>
                        {errors.city && <p>{errors.city}</p>}
                    </div>
                    <div className='mb-3 col-md-4'>
                        <label class='formr-label' className='formr-label'>
                           State
                        </label>
                        <input
                        class='formr-control'
                        className='formr-input'
                        id='exampleFormContrlTextarea1'
                        rows='1'
                        name="state"
                        onChange={handleChange}
                        value={values.state}/>
                        {errors.state && <p>{errors.state}</p>}
                    </div>
                    <div className='mb-3 col-md-4'>
                        <label class='formr-label' className='formr-label'>
                           Pincode
                        </label>
                        <input
                        class='formr-control'
                        className='formr-input'
                        id='exampleFormContrlTextarea1'
                        rows='1'
                        name="zip"
                        onChange={handleChange}
                        value={values.zip}/>
                        {errors.zip && <p>{errors.zip}</p>}
                    </div>
                </div>
                <div className='row mt-2'>
                <div className="col-md-4 mb-3">
                      <label class='formr-label' className="formr-label">Contact Number</label>
                      <input
                      class='form-control'
                        className="formr-input"
                        type="contactnumber"
                        rows='1'                                                                                                                                                                                                                                                                                                                                                                                                           
                         name="contactnumber"
                        placeholder=""
                        value={values.contactnumber}
                        onChange={handleChange}
                      />
                      {errors.contactnumber && <p>{errors.contactnumber}</p>}
                    </div> 
                    <div className="col-md-4 mb-3">
                      <label class='formr-label' className="formr-label">Contact Number 2</label>
                      <input
                      class='form-control'
                        className="formr-input"
                        type="contactnumber2"
                        rows='1'                                                                                                                                                                                                                                                                                                                                                                                                           
                         name="contactnumber2"
                        placeholder=""
                        value={values.contactnumber2}
                        onChange={handleChange}
                      />
                      {errors.contactnumber2 && <p>{errors.contactnumber2}</p>}
                    </div>  
                    <div className="col-md-4 mb-3">
                      <label class='formr-label' className="formr-label">Email Address</label>
                      <input
                      class='form-control'
                        className="formr-input"
                        type="email"
                        rows='1'                                                                                                                                                                                                                                                                                                                                                                                                           
                         name="email"
                        placeholder=""
                        value={values.email}
                        onChange={handleChange}
                      />
                      {errors.email && <p>{errors.email}</p>}
                    </div>  
                </div>
                </div>
 
                 <hr/>
                 <h1>Educational Details</h1>
                 <div className="formr-inputs">
                 <div class="input-group mb-3">
                     <label class='input-group-text' for='inputGroupSelect01' className='specialization-label'>Educational Specialization</label>
                     <select class='form-select' id='inputgroupSelect01' className='specialization-select'
                     name='specialization'
                     onChange={handleChange}
                     value={values.specialization}>
                         <option selected>Please select your highest specialization</option>
                         <option values='' className='formr-label'></option>
                         <option values='' className='formr-label'></option>
                         <option values='' className='formr-label'></option>
                         <option values='' className='formr-label'></option>
                         <option values='' className='formr-label'></option>
                         <option values='' className='formr-label'></option>
                         <option values='' className='formr-label'></option>
                         <option values='' className='formr-label'></option>
                         <option values='' className='formr-label'></option>
                         <option values='' className='formr-label'></option>
                         <option values='' className='formr-label'></option>
                         <option values='' className='formr-label'></option>
                         <option values='' className='formr-label'></option>
                         <option values='' className='formr-label'></option>
                         <option values='' className='formr-label'></option>
                         <option values='' className='formr-label'></option>
                         <option values='' className='formr-label'></option>
                         <option values='' className='formr-label'></option>
                         <option values='' className='formr-label'></option>
                         <option values='' className='formr-label'></option>
                         <option values='' className='formr-label'></option>
                         <option values='' className='formr-label'></option>
                         <option values='' className='formr-label'></option>
                         <option values='' className='formr-label'></option>
                         <option values='' className='formr-label'></option>
                         <option values='' className='formr-label'></option>
                         <option values='' className='formr-label'></option>
                         <option values='' className='formr-label'></option>
                         <option values='' className='formr-label'></option>
                         <option values='' className='formr-label'></option>
                         <option values='' className='formr-label'></option>
                         <option values='' classNa3me='formr-label'></option>
                         <option values='' className='formr-label'></option>
                         <option values='' className='formr-label'></option>
                         <option values='' className='formr-label'></option>
                     </select>
                 </div>{errors.specialization && <p>{errors.specialization}</p>}
                 <div className="col-md-12">
                    <label className="formr-label">Institute name</label>
                    <input
                      className="formr-input"
                      type="institutename"
                      name="institutename"
                      
                      value={values.institutename}
                      onChange={handleChange}
                    />
                    {errors.institutename && <p>{errors.institutename}</p>}
                  </div>
                    </div>
                    <hr/>
                <h1>Work Experience Details</h1>
                <div className="formr-inputs mt-2">
                  <div className="col-md-12">
                    <label className="formr-label">work Experience</label>
                    <textarea
                      className="formr-input"
                      type="details"
                      name="details"
                      placeholder="Type of work u do , experience"
                      value={values.details}
                      onChange={handleChange}
                    />
                    {errors.details && <p>{errors.details}</p>}
                  </div>
                  </div>
                  <div className="formr-inputs mt-3">
                  <legend class="formr-label pt-0">Type of work you are interested in</legend>
                  <div>
                    <div class="formr-check form-check-inline mt-2">
                      <input
                        class="formr-check-input"
                        type="radio"
                        name="tow"
                        value="tow"
                        id="inlineCheckbox1"
                        onChange={handleChange}
                      />
                      <label
                        class="formr-check-label pt-1"
                        for="inlineCheckbox1"
                      >
                        &nbsp;&nbsp;Part-Time
                      </label>
                    </div>
                    <div class="formr-check form-check-inline mt-2">
                      <input
                        class="formr-check-input"
                        type="radio"
                        name="tow"
                        value="tow"
                        id="inlineCheckbox1"
                        onChange={handleChange}
                      />
                      <label
                        class="formr-check-label pt-1"
                        for="inlineCheckbox2"
                      >
                        &nbsp;&nbsp;Full-Time
                      </label>
                    </div>
                    <div class="formr-check form-check-inline mt-2">
                      <input
                        class="formr-check-input"
                        type="radio"
                        name="tow"
                        value="tow"
                        id="inlineCheckbox1"
                        onChange={handleChange}
                      />
                      <label
                        class="formr-check-label pt-1"
                        for="inlineCheckbox2"
                      >
                        &nbsp;&nbsp;Customised-Time
                      </label>
                    </div>

                    {errors.tow && <p>{errors.tow}</p>}
                  </div>
                </div>
                    <hr/>
                <h1>Upload Documents</h1>
                <div className="formr-inputs">
                 <div className='row'>
                 <div class="input-group" className="mb-3 col-md-4">
                    <label class="formr-label" className="formr-label">
                    Aadhar Card</label>
                    <input
                      type="file"
                      class="formr-control"
                      className="formr-label"
                      id="inputGroupFile04"
                      aria-describedby="inputGroupFileAddon04"
                      aria-label="Upload"
                      name="aadharcard"
                      value={values.aadharcard}
                      onChange={handleChange}
                    />
                    {errors.aadharcard && <p>{errors.aadharcard}</p>}
                  </div>
                  <div class="input-group" className="mb-3 mx-5 col-md-4">
                    <label class="formr-label" className="formr-label">
                     Electricity Bill
                    </label>
                    <input
                      type="file"
                      class="formr-control"
                      className="formr-label"
                      id="inputGroupFile04"
                      aria-describedby="inputGroupFileAddon04"
                      aria-label="Upload"
                      name="electricitybill"
                      value={values.electricitybill}
                      onChange={handleChange}
                    />
                    {errors.electricitybill && <p>{errors.electricitybill}</p>}
                  </div>
                  </div>
                  <div className='row'>
                  <div class="input-group" className="mb-3 col-md-4">
                    <label class="formr-label" className="formr-label">
                    Pan card
                    </label>
                    <input
                      type="file"
                      class="formr-control"
                      className="formr-label"
                      id="inputGroupFile04"
                      aria-describedby="inputGroupFileAddon04"
                      aria-label="Upload"
                      name="pancard"
                      value={values.pancard}
                      onChange={handleChange}
                    />
                    {errors.pancard && <p>{errors.pancard}</p>} </div>
                    <div class="input-group" className="mb-3 mx-5 col-md-4">
                   
                    <label class="formr-label" className="formr-label">
                    Degree/Diploma
                    </label>
                    <input
                      type="file"
                      class="formr-control"
                      className="formr-label"
                      id="inputGroupFile04"
                      aria-describedby="inputGroupFileAddon04"
                      aria-label="Upload"
                      name="degree"
                      value={values.degree}
                      onChange={handleChange}
                    />
                    {errors.degree && <p>{errors.degree}</p>}
                  </div>
                  </div>
                  </div>
                 
                 <div className="formr-inputs">
                 <div className='col-12 my-4'>
                     <div class='form-check'>
                         <input class='form-check-input' type='checkbox' id='gridcheck'
                         name='agreebox'
                         onChange={handleChange}
                         value='agreebox'/>
                         <label
                         className='agreebox'
                         class='form-check-label'
                         for='gridCheck'>I agree to the <a className='scsrrtlink' href=''>Terms & Conditions.</a>
                         </label>{errors.agreebox && <p>{errors.agreebox}</p>}
                     </div>
                 </div>
                 </div>
                 <div class='col-12 mb-200 text-center'>
                     <button
                     className='formr-input-btn'
                     type='submit'
                     onClick={handleSubmit}>
                     Submit Details
                     </button>
                 </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
