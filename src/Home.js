import React, { useContext } from "react";
import { UserContext } from './UserConext';

export default () => {
	const { user } = useContext(UserContext);
	return (
		<div>
			<h1>Home Page</h1>
			{ user }
		</div>
	);
}
