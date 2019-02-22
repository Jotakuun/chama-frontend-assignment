async function get(url) {
	try {
		const res = await fetch(url);
		return res;
	} catch (err) {
		return err;
	}
}

async function request(method, url, data) {
	try {
		const res = await fetch(url, {
			method: method,
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});
		return res;
	} catch (err) {
		return err;
	}
}

export const Http = {
	get: (url) => get(url),
	post: (url, data) => request('POST', url, data),
	put: (url, data) => request('PUT', url, data),
	delete: (url, data) => request('DELETE', url, data)
}