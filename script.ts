document.getElementById('resumeForm')?.addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form elements
    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement | null;
    const nameElement = document.getElementById('name') as HTMLInputElement | null;
    const emailElement = document.getElementById('email') as HTMLInputElement | null;
    const phoneElement = document.getElementById('phone') as HTMLInputElement | null;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement | null;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement | null;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement | null;

    //** 
  const usernameElement = document.getElementById(
    "username"
  ) as HTMLInputElement;


    // Check if elements exist and get their values
    if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
       //** 
       usernameElement


        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        //** 
        const username = usernameElement.value;
        const uniquepath =`resume/${username.replace(/\s+/g, '_')}_cv.html`


        // Generate resume output
        const profilePictureFile = profilePictureInput.files?.[0];
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';

        // Resume Output HTML
        const resumeOutput = `
        <h2>Resume</h2>
        ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ''}
        <p><strong>Name:</strong> <span id="edit-name" class="editable">${name}</span></p>
        <p><strong>Email:</strong> <span id="edit-email" class="editable">${email}</span></p>
        <p><strong>Phone:</strong> <span id="edit-phone" class="editable">${phone}</span></p>

        <h3>Education</h3>
        <p id="edit-education" class="editable">${education}</p>

        <h3>Experience</h3>
        <p id="edit-experience" class="editable">${experience}</p>

        <h3>Skills</h3>
        <p id="edit-skills" class="editable">${skills}</p>
        `;
     //** 
    const downloadLink = document.createElement('a')
    downloadLink.href = 'data:text/html;chartset=utf-8,'+encodeURIComponent(resumeOutput)
    downloadLink.download = uniquepath;
    downloadLink.textContent = 'Download Your 2024 Resume';


        // Insert resume into the output div
        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;


       //** 
     resumeOutputElement.appendChild(downloadLink)


            makeEditable();
        }
    } else {
        console.error('One or more form elements are missing');
    }
});

function makeEditable() {
    const editableElements = document.querySelectorAll('.editable');

    editableElements.forEach(element => {
        element.addEventListener('click', function () {
            const currentElement = element as HTMLElement;
            const currentValue = currentElement.textContent || '';

            // Create an input field to replace the text content
            const input = document.createElement('input');
            input.type = 'text';
            input.value = currentValue;
            input.classList.add('editing-input');

            // Handle updating the text content when the input field loses focus
            input.addEventListener('blur', function () {
                currentElement.textContent = input.value;
                currentElement.style.display = 'inline'; // Show the original element
                input.remove(); // Remove the input field after editing
            });

            // Replace the element with the input field
            currentElement.style.display = 'none'; // Hide the original element
            currentElement.parentNode?.insertBefore(input, currentElement);
            input.focus(); // Focus on the input field for immediate editing
        });
    });
}


