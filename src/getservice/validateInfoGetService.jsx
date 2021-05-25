export default function validateInfoGetService(values){
    let errors={};

if(!values.patientname){
    errors.patientname="Name cannot be empty";
}else if(!/^[A-Za-z]+/.test(values.patientname)){
    errors.patientname='Enter a valid name';
}else if(/\d+/g.test(values.patientname)){
    errors.patientname='Enter a valid name';
}

if(!values.age){
    errors.age="Enter age";
}

if(!values.gender){
    errors.gender="Please select Gender";
}

if(!values.diseasedetails){
    errors.diseasedetails="Enter disease details";
}

if(!values.prescription){
    errors.prescription="Prescription is required";
}else if(!values.prescription.match(/\.(jpg|jpeg|png|svg|pdf)$/)){
    errors.prescription="Please select valid JPG JPEG PNG SVG PDF format.";
}

if(!values.aadharcard){
    errors.aadharcard="Identity proof is required";
}else if(!values.aadharcard.match(/\.(jpg|jpeg|png|svg|pdf)$/)){
    errors.aadharcard="Please select valid JPG JPEG PNG SVG PDF format.";
}


if(!values.address){
    errors.address="Please select address";
}

if(!values.city){
    errors.city="City name cannot be empty";
}else if(!/^[A-Za-z]+/.test(values.city)){
    errors.city='Enter a valid city name';
}else if(/\d+/g.test(values.city)){
    errors.city='Enter a valid city name';
}


if(!values.state){
    errors.state="State name cannot be empty";
}else if(!/^[A-Za-z]+/.test(values.state)){
    errors.state='Enter a valid state name';
}else if(/\d+/g.test(values.state)){
    errors.state='Enter a valid state name';
}

if(!values.zip){
    errors.zip="Please enter Pincode";
}else if(!/\d+/.test(values.zip)){
    errors.zip="Enter valid pincode";
}else if(values.zip.length !=6){
    errors.zip="Enter valid 6 digit Pincode";
}

if(!values.contactnumber){
    errors.contactnumber="Please enter contact number";
}else if(!/\d+/.test(values.contactnumber)){
    errors.contactnumber="Enter valid contact number";
}else if(values.contactnumber.length !=10){
    errors.contactnumber="Enter valid 10 digit contact numbere";
}

if(!values.contactnumber2){
    errors.contactnumber2="Required for emergency purpose";
}else if(!/\d+/.test(values.contactnumber2)){
    errors.contactnumber2="Enter valid contact number";
}else if(values.contactnumber2.length !=10){
    errors.contactnumber2="Enter valid 10 digit contact numbere";
}

if(!values.agreebox){
    errors.agreebox="Please read T&c and check it if u agree the T&c.";
}
return errors;
}