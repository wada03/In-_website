document.addEventListener("DOMContentLoaded", function () {
	document.querySelectorAll(".container").forEach(container => {
		const description = container.querySelector(".description");
		const iframe = container.querySelector(".trinket iframe");

		if (description && iframe) {
			const height = description.offsetHeight; // description の高さを取得
			iframe.style.height = `${height}px`; // trinket iframe の高さを合わせる
		}
	});
});