
document.addEventListener("DOMContentLoaded", function () {
	const description = document.querySelector(".description");
	const iframe = document.querySelector(".trinket iframe");
	if (description && iframe) {
		iframe.style.height = `${description.offsetHeight}px`;
	}
});
