import { API_URL } from '$env/static/private';
import { redirect } from '@sveltejs/kit';

export const load = async (event) => {
	const sessionId = event.cookies.get('sessionId');

	if (!sessionId) {
		throw redirect(301, '/sign-in');
	}

	const res = await event.fetch(`${API_URL}/users/me`, {
		headers: {
			Authorization: `Bearer ${sessionId}`
		}
	});

	if (res.ok) {
		const user = (await res.json()) as {
			Id: string;
			FirstName: string;
			LastName: string;
			Email: string;
		};

		return {
			props: {
				user
			}
		};
	}
};
