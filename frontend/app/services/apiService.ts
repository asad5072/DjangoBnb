const apiService = {
	get: async function (url: string): Promise<any> {
		return new Promise((resolve, reject) => {
			fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
				method: "GET",
				headers: {
					Accept: "application/json", // fixed case
					"Content-Type": "application/json", // fixed case
				},
			})
				.then((response) => response.json())
				.then((json) => {
					console.log("Response:", json);
					resolve(json);
				})
				.catch((error) => {
					reject(error);
				});
		});
	},
	post: async function (url: string, data: any): Promise<any> {
		return new Promise((resolve, reject) => {
			fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
				method: "POST",
				body: JSON.stringify(data), // always stringify JS object
				headers: {
					Accept: "application/json", // fixed case
					"Content-Type": "application/json", // fixed case
				},
			})
				.then((response) => response.json())
				.then((json) => {
					console.log("Response:", json);
					resolve(json);
				})
				.catch((error) => {
					reject(error);
				});
		});
	},
};
export default apiService;
