
// document.addEventListener('DOMContentLoaded', () => {
//     const bodyId = document.body.id;

//     // Helper function for navigation
//     const navigateTo = (page) => {
//         window.location.href = page;
//     };

//     // Page-specific initializations
//     if (bodyId === 'homePage') {
//         document.getElementById('loginBtnHome')?.addEventListener('click', () => navigateTo('auth.html'));
//         document.getElementById('signupBtnHome')?.addEventListener('click', () => navigateTo('auth.html'));
//     } else if (bodyId === 'authPage') {
//         const handleAuthAction = (event) => {
//             event.preventDefault(); // Prevent form submission if it's a form button
            
//             // Dummy validation example (optional)
//             const email = document.getElementById('email').value;
//             const password = document.getElementById('password').value;
//             if (!email || !password) {
//                 alert('Please enter both email and password.');
//                 return;
//             }
//             if (!email.includes('@')) {
//                 alert('Please enter a valid email address.');
//                 return;
//             }
//             // Since it's a dummy auth, we don't actually save or verify credentials.
//             // We can store which action was taken if needed for other logic, but not required here.
//             // localStorage.setItem('userAction', event.target.id.includes('login') ? 'login' : 'signup');
//             navigateTo('personalization.html');
//         };

//         document.getElementById('loginBtnAuth')?.addEventListener('click', handleAuthAction);
//         document.getElementById('signupBtnAuth')?.addEventListener('click', handleAuthAction);
        
//     } else if (bodyId === 'personalizationPage') {
//         const personalizationForm = document.getElementById('personalizationForm');
//         personalizationForm?.addEventListener('submit', (event) => {
//             event.preventDefault();
//             const skills = {
//                 publicSpeaking: document.getElementById('publicSpeaking').value,
//                 adaptability: document.getElementById('adaptability').value,
//                 problemSolving: document.getElementById('problemSolving').value,
//                 teamwork: document.getElementById('teamwork').value,
//                 leadership: document.getElementById('leadership').value,
//             };
//             const resumeFile = document.getElementById('resumeUpload').files[0];
            
//             if (!resumeFile) {
//                 alert('Please upload your resume.');
//                 return;
//             }
//             const resumeFileName = resumeFile.name;

//             // Store data in localStorage for the demo
//             localStorage.setItem('resumeMatcherData', JSON.stringify({ skills, resumeFileName }));
//             navigateTo('job-description.html');
//         });
//     } else if (bodyId === 'jobDescriptionPage') {
//         document.getElementById('analyzeFitButton')?.addEventListener('click', () => {
//             const jobDescriptionText = document.getElementById('jobDescriptionText').value;
            
//             if (!jobDescriptionText.trim()) {
//                 alert('Please paste a job description.');
//                 return;
//             }

//             // Retrieve stored resume data (optional for this step, but good practice)
//             const storedData = JSON.parse(localStorage.getItem('resumeMatcherData'));
//             if (!storedData || !storedData.resumeFileName || storedData.resumeFileName === 'No file selected') {
//                 alert('Resume data not found. Please go back to personalization.');
//                 // navigateTo('personalization.html'); // Optionally force navigation
//                 return;
//             }

//             // Dummy analysis logic: 50/50 chance
//             const isQualified = Math.random() > 0.5;

//             if (isQualified) {
//                 navigateTo('result-qualified.html');
//             } else {
//                 navigateTo('result-not-qualified.html');
//             }
//         });
//     }
// });
    