import React, {useEffect, useState} from 'react';

const ComponentDidMountHook = props => {
	const [count, setCount] = useState(0);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		setCount(100);
		setIsLoading(false);
	}, []);

	return isLoading ? (
		<p>Content is loading ...</p>
		) : (
		<p>Count is {count}</p>
		);
	
}

export default ComponentDidMountHook;