import React from "react";
import validate from "./validateInfoGetService";
import useForm from "./useFormGetService";
import "./FormGetService.css";
import { NavLink } from "react-router-dom";

const GetService = ({ submitForm }) => {
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
                <h1 className="firsth1">Patient & disease details</h1>

                <div className="formr-inputs">
                  <div className="row">
                    <div className="col-md-9">
                      <label className="formr-label">Patient name</label>
                      <input
                        className="formr-input"
                        type="patientnamne"
                        name="patientnamne"
                        placeholder="Enter your Full name"
                        value={values.patientnamne}
                        onChange={handleChange}
                      />
                      {errors.patientnamne && <p>{errors.patientnamne}</p>}
                    </div>
                    <div className="mb-3 col-md-3">
                      <label className="formr-label">Age</label>
                      <input
                        className="formr-input"
                        rows="1"
                        type="number"
                        name="age"
                        placeholder='in years'
                        value={values.age}
                        onChange={handleChange}
                      />
                      {errors.age && <p>{errors.age}</p>}
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
                  <div className="col-md-12">
                    <label className="formr-label">Disease Details / Pregnacy Details</label>
                    <textarea
                      className="formr-input"
                      type="diseasedetails"
                      name="diseasedetails"
                      placeholder="Diagnosed disease with patient condition"
                      value={values.diseasedetails}
                      onChange={handleChange}
                    />
                    {errors.diseasedetails && <p>{errors.diseasedetails}</p>}
                  </div>
                  </div>
                  
                <div className="formr-inputs mt-2">
                <div className='row'>
                  <div class="input-group" className="mb-3 col-md-4">
                    <label class="formr-label" className="formr-label">
                      Latest Prescription
                    </label>
                    <input
                      type="file"
                      class="formr-control"
                      className="formr-label"
                      id="inputGroupFile04"
                      aria-describedby="inputGroupFileAddon04"
                      aria-label="Upload"
                      name="prescription"
                      value={values.prescription}
                      onChange={handleChange}
                    />
                    {errors.prescription && <p>{errors.prescription}</p>}
                  </div>
                  <div class="input-group" className="mb-3 mx-5 col-md-4">
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
                </div>
                </div>
               
                <div className="formr-inputs mt-2">
                  <div className="col-md-12">
                    <label className="formr-label">Address (Location where service is needed)</label>
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

export default GetService;
