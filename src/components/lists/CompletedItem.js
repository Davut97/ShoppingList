import React from 'react';

const CompletedItem = item => {
	// console.log(item);
	return (
		<p>
			{item.item.name}-{item.item.amount}
		</p>
	);
};
export default CompletedItem;
