// Select all the panels.
const panels = document.querySelectorAll(".panel");

// Cycle the panels.
panels.forEach((panel) => {
	// When one of them is clicked...
  panel.addEventListener("click", () => {
		removeActiveClasses();
		panel.classList.add('active');
  });
});

// Function for the active class.
function removeActiveClasses() {
	panels.forEach(panel => {
		panel.classList.remove('active');
	});
}
