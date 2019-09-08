import React from 'react';
import {useLazyLoadData} from './custom_hooks';

const CustomHookComponentDidMountDemo = props => {
	const [isLoading, count] = useLazyLoadData();

	return isLoading ? (
		<p>Content is loading ...</p>
		) : (
		<p>Count is {count}</p>
		);

}

export default CustomHookComponentDidMountDemo;