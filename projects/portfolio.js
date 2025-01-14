
        function handleFormSubmit(event) {
            event.preventDefault(); // Prevent the default form submission
            
            // Get the values of the input fields
            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;
            var message = document.getElementById("message").value;

            // Simple validation
            if (name === "" || email === "" || message === "") {
                alert("Please fill in all fields.");
            } else {
                alert("Thank you for contacting me, " + name + "!");
                // You can add further functionality like sending the form data here
            }
        }

        // Function for button clicks or other actions
        function handleButtonClick(action) {
            alert("Button clicked! Action: " + action);
        }
