document.addEventListener("DOMContentLoaded", function () {
	document.querySelectorAll(".container").forEach(container => {
		const description = container.querySelector(".description");
		const iframe = container.querySelector(".trinket iframe");

		if (description && iframe) {
			const minHeight = 300; // 最低限確保したい高さ（px）
			const height = Math.max(description.offsetHeight, minHeight);
			iframe.style.height = `${height}px`; // trinket iframe の高さを適用
		}
	});
});
