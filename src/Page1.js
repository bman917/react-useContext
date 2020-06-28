import React, { useContext } from "react";
import { UserContext } from './UserConext';

export default () => {
	const { user, setUser } = useContext(UserContext);
	return (
		<div>
			<h1>Page 1</h1>
			{ user }
			<p/>
			<div>
				{ user ?
						<button onClick={() => setUser(null)}>logout</button> :
						<button onClick={() => setUser("foo")}>login</button>
				}
			</div>
		</div>
	);
}
