// script.js

// Function to load a previously saved answer and mark it as checked
function loadSavedAnswer(questionKey) {
  const savedAnswer = localStorage.getItem(questionKey);
  if (savedAnswer) {
    const radio = document.querySelector('input[name="answer"][value="' + savedAnswer + '"]');
    if (radio) {
      radio.checked = true;
    }
  }
}

// This function applies the fade-out effect and then navigates to the target URL
function navigateWithFade(targetUrl) {
  const container = document.querySelector('.container');
  if (!container) {
    // Fallback to direct navigation if container is not found
    window.location.href = targetUrl;
    return;
  }
  container.classList.add('fade-out');
  
  // Listen for the end of the CSS transition, then navigate
  container.addEventListener('transitionend', function () {
    window.location.href = targetUrl;
  });
}

// Updated function to handle form submission for each question
function handleQuestionSubmission(formId, questionKey, nextPageUrl) {
  const form = document.getElementById(formId);
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    // Save the selected answer in localStorage
    let answer = document.querySelector('input[name="answer"]:checked').value;
    localStorage.setItem(questionKey, answer);
    // Navigate to the next page with a fade-out transition
    navigateWithFade(nextPageUrl);
  });
}
