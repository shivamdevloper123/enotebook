import React from 'react';

function About() {
  return (
    <div className='container' style={{ marginTop: '80px', padding: '20px' }}>
      <h1 className='text-center'>About eNotebook</h1>
      <div className='accordion' id='accordionExample'>
        <div className='accordion-item'>
          <h2 className='accordion-header'>
            <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapseOne' aria-expanded='true' aria-controls='collapseOne'>
              <strong>Overview</strong>
            </button>
          </h2>
          <div id='collapseOne' className='accordion-collapse collapse show' data-bs-parent='#accordionExample'>
            <div className='accordion-body'>
              <strong>eNotebook</strong> is a secure and user-friendly note-taking application built using React.js, Node.js, Express.js, and MongoDB. It allows users to create, update, and manage their daily notes efficiently. With features like <b>JWT-based authentication</b>, <b>REST APIs</b>, and <b>Bootstrap for styling</b>, eNotebook ensures a seamless and protected user experience.
            </div>
          </div>
        </div>
        
        <div className='accordion-item'>
          <h2 className='accordion-header'>
            <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseTwo' aria-expanded='false' aria-controls='collapseTwo'>
              <strong>Features</strong>
            </button>
          </h2>
          <div id='collapseTwo' className='accordion-collapse collapse' data-bs-parent='#accordionExample'>
            <div className='accordion-body'>
              <ul>
                <li><b>Secure login</b> and authentication using JWT.</li>
                <li><b>Create</b>, update, and delete notes.</li>
                <li>Organized notes with <b>timestamps</b> for easy tracking.</li>
                <li>Responsive UI with <b>Bootstrap</b> integration.</li>
                <li>REST API-based backend for <b>smooth data handling</b>.</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className='accordion-item'>
          <h2 className='accordion-header'>
            <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseThree' aria-expanded='false' aria-controls='collapseThree'>
              <strong>How to Use eNotebook</strong>
            </button>
          </h2>
          <div id='collapseThree' className='accordion-collapse collapse' data-bs-parent='#accordionExample'>
            <div className='accordion-body'>
              <ol>
                <li><b>Sign Up / Log In:</b> Create an account or log in with your existing credentials.</li>
                <li><b>Add a New Note:</b> Click on the "Add Note" button to create a new note.</li>
                <li><b>Edit Notes:</b> Click on the edit icon next to any note to update its content.</li>
                <li><b>Delete Notes:</b> Remove unwanted notes using the delete button.</li>
                <li><b>Access Notes Anytime:</b> Your notes are securely stored and can be accessed anytime from any device.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      
      <p><b>eNotebook</b> is designed to help users stay organized and productive by keeping track of their important notes effortlessly.</p>
    </div>
  );
}

export default About;
