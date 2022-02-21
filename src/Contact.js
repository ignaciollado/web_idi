import React from 'react'
import { useState } from 'react'

//----------- Needed for internationalization -------------------------------------
import { useTranslation } from 'react-i18next'
//---------------------------------------------------------------------------------
import "./css/contact.css"

export default function Contact(props) {
	const { t } = useTranslation()
	const [inputs, setInputs] = useState({
		name:"",
		subject: t('description.sendingMessageFromTheWeb'),
		email:"",
		message:"",
	});

	const handleChange = (event) => {
		setInputs(

			{...inputs, [event.target.name]: event.target.value}  

			)
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		var messageToSend = JSON.stringify(  inputs )
		window.location.href = "/send/" + messageToSend
	  }
	
		return(

				<form className="contact" onSubmit={handleSubmit}>
					
					<div className="form-group">
						<label htmlFor="username ">{t('description.name')}</label>
						<input type="text" required className="form-control" name="name" id="name" value={ inputs.name } onChange={handleChange || ""} />
				  	</div>
				  	<div className="form-group">
						<label htmlFor="exampleInputEmail1">{t('description.mailAddress')}</label>
						<input type="email" required className="form-control" name="email" id="email" aria-describedby="emailHelp" value={ inputs.email } onChange={handleChange || ""} />
				  	</div>
				  	<div className="form-group">
						<label htmlFor="message">{t('description.subject')}</label>
						<textarea required className="form-control" rows="5" name="message" id="message" value={ inputs.message } onChange={handleChange || ""} />
				  	</div>
				  	<div className="contact__submit">
					  	<input type="submit" />
				  	</div>
  
				</form>

			);
		 
		}
	