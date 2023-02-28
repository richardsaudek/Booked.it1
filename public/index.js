<script>
       const form = document.getElementById('bookedit-form');
    // Add an event listener to handle form submission
    form.addEventListener('submit', async (event) => {
            event.preventDefault(); // prevent default form submission behavior
            
            // Get the form data as an object
            const formData = new FormData(form);
            const formDataObj = Object.fromEntries(formData.entries());
            
            // Send a POST request to the API with the form data
            const response = await fetch('{{host}}/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formDataObj)
            });
            
            // Handle the API response
            if (response.ok) {
                alert('Data submitted successfully!');
            } else {
                const errorData = await response.json();
                alert(`Error submitting data: ${errorData.message}`);
            }
    });
    </script>
