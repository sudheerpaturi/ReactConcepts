import React, {useState, useEffect} from 'react';

export const useLazyLoadData = (dependencies = []) => {
	const [isLoading, setIsLoading] = useState(false);
	const [count, setCount] = useState(0);

	useEffect(() => {
		setIsLoading(true);
		setCount(100);
		setIsLoading(false);
	}, dependencies);
	return [isLoading, count];
}