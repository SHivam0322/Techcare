export default function validateInfoRegister(values){
    let errors={};

if(!values.fullname){
    errors.fullname="Name cannot be empty";
}else if(!/^[A-Za-z]+/.test(values.fullname)){
    errors.fullname='Enter a valid name';
}else if(/\d+/g.test(values.fullname)){
    errors.fullname='Enter a valid name';
}

if(!values.dob){
    errors.dob="Please select date of birth";
}

if(!values.gender){
    errors.gender="Please select Gender";
}

if(!values.profilephoto){
    errors.profilephoto="Profile photo is required";
}else if(!values.profilephoto.match(/\.(jpg|jpeg|png|svg|pdf)$/)){
    errors.profilephoto="Please select valid JPG JPEG PNG SVG PDF format.";
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

if(!values.email){
    errors.email="Email adrees cannot be empty";
}else if(!/\S+@\S+\.\S+/.test(values.email)){
    errors.email="Enter valid email address";
}

if(!values.specialization){
    errors.specialization="Please select specialization";
}

if(!values.institutename){
    errors.institutename="Enter institute name";
}

if(!values.details){
    errors.details="Enter work experience details";
}

if(!values.tow){
    errors.tow="Please select type of work you are interested in.";
}

if(!values.aadharcard){
    errors.aadharcard="Identity proof is required";
}else if(!values.aadharcard.match(/\.(jpg|jpeg|png|svg|pdf)$/)){
    errors.aadharcard="Please select valid JPG JPEG PNG SVG PDF format.";
}

if(!values.electricitybill){
    errors.electricitybill="Address proof is required";
}else if(!values.electricitybill.match(/\.(jpg|jpeg|png|svg|pdf)$/)){
    errors.electricitybill="Please select valid JPG JPEG PNG SVG PDF format.";
}

if(!values.pancard){
    errors.pancard="Pancard is required";
}else if(!values.pancard.match(/\.(jpg|jpeg|png|svg|pdf)$/)){
    errors.pancard="Please select valid JPG JPEG PNG SVG PDF format.";
}

if(!values.degree){
    errors.degree="Educational qualification proof is required";
}else if(!values.degree.match(/\.(jpg|jpeg|png|svg|pdf)$/)){
    errors.degree="Please select valid JPG JPEG PNG SVG PDF format.";
}

if(!values.agreebox){
    errors.agreebox="Please read T&c and check it if u agree the T&c.";
}
return errors;
}