import React from 'react'

const SignUp = () => {
	return (
		<form className="form signup">
      	<div className='form-group'>
        
				<label htmlFor='username'>Username</label>
				<input
					required
					type='text'
					name='username'
					id='username'
					className='form-field'
				/>
			</div>

			<div className='form-group'>

				<label htmlFor='email'>Email</label>
				<input
					required
					type='text'
					name='email'
					id='email'
					className='form-field'
				/>
			</div>

			<div className='form-group'>
				<label htmlFor='password'>Password</label>
				<input
					required
					type='password'
					name='password'
					id='password'
					className='form-field'
				/>
			</div>
			<div className='form-group buttons'>
				<button className='btn btn-success'>Login</button>
				<button type="reset" className='btn btn-success'>Reset</button>
			</div>
		</form>
	)
}

export default SignUp;
