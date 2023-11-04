//your JS code here. If required.
function setCookie(name, value, days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      const expires = "expires=" + date.toUTCString();
      document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    // Function to get a cookie value by name
    function getCookie(name) {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
          return cookie.substring(name.length + 1, cookie.length);
        }
      }
      return "";
    }

    // Function to apply user preferences
    function applyPreferences() {
      const fontSizeSelect = document.getElementById('font-size');
      const fontColorInput = document.getElementById('font-color');
      const body = document.body;

      // Get user preferences from cookies or use default values
      const fontSize = getCookie('fontSize') || '16px';
      const fontColor = getCookie('fontColor') || '#000000';

      // Apply user preferences
      body.style.fontSize = fontSize;
      body.style.color = fontColor;
      fontSizeSelect.value = fontSize;
      fontColorInput.value = fontColor;
    }

    // Event listener for the form submission
    const preferencesForm = document.getElementById('preferences-form');
    preferencesForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const fontSizeSelect = document.getElementById('font-size');
      const fontColorInput = document.getElementById('font-color');
      const fontSize = fontSizeSelect.value;
      const fontColor = fontColorInput.value;

      // Store user preferences in cookies
      setCookie('fontSize', fontSize, 30);
      setCookie('fontColor', fontColor, 30);

      // Apply user preferences immediately
      applyPreferences();
    });

    // Apply user preferences when the page loads
    applyPreferences();