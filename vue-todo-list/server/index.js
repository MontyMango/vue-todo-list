export default {
	fetch(request) {
		const url = new URL(request.url);

		// if (url.pathname.startsWith("/api/")) {
		// 	return Response.json({
		// 		name: "Hello from the Backend!",
		// 	});
		// }

		return new Response(null, { status: 404 });
	},
};
