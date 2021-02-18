import React,{Component} from 'react';
import './requestform.css';
const submit=require('../netlifyhandler');

export default class RequestForm extends Component{
	state={error:null}
	// handleSubmit=e=>{
    //     e.preventDefault()
    //     const {f_name,l_name,str1,str2,city,state,zip,email,phone}=e.target;
	// 	// console.log(f_name.value,l_name.value,str1.value,str2.value,city.value,state.value,zip.value,email.value,phone.value);
	// 	if(phone!==undefined){
	// 		handler.handler()
	// 	}
    // }
	validate=input=>{
		if(input.target.value===null||input.target.value===undefined||input.target.value===''){this.setState({error:null});}
		else if(input.target.name==='f_name'||input.target.name==='l_name'||input.target.name==='city'){
			// The validation error logging here could be employed to stack which would account for the case in which these validation errors are overwriting each other.
				if(/^([0-9]*)$/.test(input.target.value)===true&&input.target.value!==''){
					if(input.target.name==='f_name'){this.setState({error:'Invalid first name'});}
					if(input.target.name==='l_name'){this.setState({error:'Invalid last name'});}
					if(input.target.name==='city'){this.setState({error:'Invalid city'});}
			}
		}
		else if(input.target.name==='zip'&&/^([0-9]*)$/.test(input.target.value)===false){this.setState({error:'Invalid zip code'});}
		else if(input.target.name==='email'&&/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input.target.value)===false){this.setState({error:'Invalid email'});}
		else if(input.target.name==='phone'&&/^\d{3}-\d{3}-\d{4}$/.test(input.target.value)===false){this.setState({error:'Invalid phone'});}
		// Catch the last character entry in the input field.
		if(input.target.name==='email'&&/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input.target.value)===true){this.setState({error:null});}
		// Catch the last character entry in the input field.
		if(input.target.name==='phone'&&/^\d{3}-\d{3}-\d{4}$/.test(input.target.value)===true){this.setState({error:null});}
	}
    render(){

        return(
            <div id='form-container'>
				<form id='request-form' name='request-form' aria-label='request-form' onSubmit={submit.handler}>
                    <fieldset>
                        <legend><h2>Submit an Endorsement</h2></legend>
                        <div className='form-element-container'>
                            <label className='form-label' htmlFor='first-name'>First Name:</label>
                            <input id='first-name' className='form-input' name='f_name' type='text' aria-label='first-name' placeholder='First Name' pattern='[A-Za-z]+' required onChange={this.validate}/>
                        </div>
                        <div className='form-element-container'>
                            <label className='form-label' htmlFor='last-name'>Last Name:</label>
                            <input id='last-name' className='form-input' name='l_name' type='text' aria-label='last-name' placeholder='Last Name' pattern='[A-Za-z]+' required onChange={this.validate}/>
                        </div>
                        <div className='form-element-container'>
                            <label className='form-label' htmlFor='street-address-1'>Street Address 1:</label>
                            <input id='street-address-1' className='form-input' name='str1' type='text' aria-label='street-address-1' placeholder='Street Address 1' required/>
                        </div>
                        <div className='form-element-container'>
                            <label className='form-label' htmlFor='street-address-2'>Street Address 2:</label>
                            <input id='street-address-2' className='form-input' name='str2' type='text' aria-label='street-address-2' placeholder='Street Address 2'/>
                        </div>
                        <div className='form-element-container'>
                            <label className='form-label' htmlFor='city'>City:</label>
                            <input id='city' className='form-input' name='city' type='text' aria-label='city' placeholder='City' pattern='[A-Za-z]+' required onChange={this.validate}/>
                        </div>
                        <div className='form-element-container'>
                            <label className='form-label' htmlFor='state'>State:</label>
                            <select id='state' className='form-input' name='state' aria-label='state' placeholder='State' required>
								<option value=''>Please select a state</option>
								<option value='AL'>AL</option>
								<option value='AK'>AK</option>
								<option value='AZ'>AZ</option>
								<option value='AR'>AR</option>
								<option value='CA'>CA</option>
								<option value='CO'>CO</option>
								<option value='CT'>CT</option>
								<option value='DE'>DE</option>
								<option value='FL'>FL</option>
								<option value='GA'>GA</option>
								<option value='ID'>ID</option>
								<option value='HI'>HI</option>
								<option value='IL'>IL</option>
								<option value='IN'>IN</option>
								<option value='IA'>IA</option>
								<option value='KS'>KS</option>
								<option value='KY'>KY</option>
								<option value='LA'>LA</option>
								<option value='ME'>ME</option>
								<option value='MD'>MD</option>
								<option value='MA'>MA</option>
								<option value='MI'>MI</option>
								<option value='MN'>MN</option>
								<option value='MS'>MS</option>
								<option value='MO'>MO</option>
								<option value='MT'>MT</option>
								<option value='NE'>NE</option>
								<option value='NV'>NV</option>
								<option value='NH'>NH</option>
								<option value='NJ'>NJ</option>
								<option value='NM'>NM</option>
								<option value='NY'>NY</option>
								<option value='NC'>NC</option>
								<option value='ND'>ND</option>
								<option value='OH'>OH</option>
								<option value='OK'>OK</option>
								<option value='OR'>OR</option>
								<option value='PA'>PA</option>
								<option value='RI'>RI</option>
								<option value='SC'>SC</option>
								<option value='SD'>SD</option>
								<option value='TN'>TN</option>
								<option value='TX'>TX</option>
								<option value='UT'>UT</option>
								<option value='VT'>VT</option>
								<option value='VA'>VA</option>
								<option value='WA'>WA</option>
								<option value='WV'>WV</option>
								<option value='WI'>WI</option>
								<option value='WY'>WY</option>
						</select>
                        </div>
                        <div className='form-element-container'>
                            <label className='form-label' htmlFor='zipcode'>Zip Code:</label>
                            <input id='zipcode' className='form-input' name='zip' type='text' aria-label='zipcode' placeholder='Zip Code' pattern='[0-9]*' required onChange={this.validate}/>
                        </div>
                        <div className='form-element-container'>
                            <label className='form-label' htmlFor='email'>Email Address:</label>
                            <input id='email' className='form-input' name='email' type='email' aria-label='email' placeholder='Email Address' pattern='/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/' onChange={this.validate}/>
                        </div>
                        <div className='form-element-container'>
                            <label className='form-label' htmlFor='phone'>Mobile Phone Number: (optional, but required to receive text message confirmation)</label>
                            <input id='phone' className='form-input' name='phone' type='tel' aria-label='phone' placeholder='000-000-0000' pattern='^\d{3}-\d{3}-\d{4}$' onChange={this.validate}/>
                        </div>
                        <div className='form-element-container'>
                            <input id='form-submit' type='submit' required aria-label='form-submit' value='Submit'/>
                        </div>
                        <div className='form-element-container'>
							<input type="hidden" name="form-name" value="request-form" />
                        </div>
                        <div id='form-error-container'>{this.state.error}</div>
                    </fieldset>
                </form>
            </div>
        );
	}
}