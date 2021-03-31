import React from 'react';

const SearchBox = ({searchChange}) => {
	return (
		<div className='pa2'>
			<input 
			className=' tl pa3 ba b--green bg-lightest-blue' 
			type='search' 
			placeholder="Search The Menu..."
			onChange={searchChange}
			/>
		</div>
		);
}

export default SearchBox;