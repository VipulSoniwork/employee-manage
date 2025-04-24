document.addEventListener('DOMContentLoaded', function() {
    // Navigation HTML template
    const navTemplate = `
        <div class="sidebar">
            <div class="logo">
                <img src="assets/logo.svg" alt="NU Logo">
            </div>
            <div class="nav-links">
                <a href="index.html" class="nav-item" id="nav-home">
                    <i class="fas fa-home"></i>
                    <div class="nav-text">Home</div>
                </a>
                <a href="employee-training.html" class="nav-item" id="nav-employee">
                    <i class="fas fa-user-graduate"></i>
                    <div class="nav-text">Employee<br>Training</div>
                </a>
                <a href="annual-training.html" class="nav-item" id="nav-annual">
                    <i class="fas fa-calendar-check"></i>
                    <div class="nav-text">Annual<br>Training</div>
                </a>
                <a href="planner.html" class="nav-item" id="nav-planner">
                    <i class="fas fa-calendar-alt"></i>
                    <div class="nav-text">Planner</div>
                </a>
                <a href="session.html" class="nav-item" id="nav-session">
                    <i class="fas fa-users"></i>
                    <div class="nav-text">Session</div>
                </a>
            </div>
        </div>
    `;

    // Inject navigation into the placeholder
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) {
        navPlaceholder.innerHTML = navTemplate;
    }

    // Highlight the active navigation item based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Clear any existing active classes
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));
    
    // Set the active class based on current page
    switch(currentPage) {
        case 'index.html':
            document.getElementById('nav-home')?.classList.add('active');
            break;
        case 'employee-training.html':
        case 'employee-training-planner.html':
            document.getElementById('nav-employee')?.classList.add('active');
            break;
        case 'annual-training.html':
        case 'annual-training-planner.html':
            document.getElementById('nav-annual')?.classList.add('active');
            break;
        case 'planner.html':
            document.getElementById('nav-planner')?.classList.add('active');
            break;
        case 'session.html':
            document.getElementById('nav-session')?.classList.add('active');
            break;
    }

    // Add functionality for the Annual Training page
    if (currentPage === 'annual-training.html') {
        // Add button event for annual training
        const addBtn = document.querySelector('.add-btn');
        if (addBtn) {
            addBtn.addEventListener('click', function() {
                // Add new training row logic
                const trainingTable = document.querySelector('.table tbody');
                const trainingTitle = document.querySelector('input[value="Process flowchart for NN Media (PR/MEM/SOP/08/PFC-02)"]');
                const trainingMonth = document.querySelector('input[value="March"]');
                
                if (trainingTable && trainingTitle && trainingMonth) {
                    const rowCount = trainingTable.querySelectorAll('tr').length;
                    const newRow = document.createElement('tr');
                    newRow.innerHTML = `
                        <td>0${rowCount + 1}</td>
                        <td>${trainingTitle.value}</td>
                        <td>${trainingMonth.value}</td>
                        <td style="text-align: center;"><button class="remove-btn"><i class="fas fa-minus-circle"></i></button></td>
                    `;
                    
                    // Add event listener to new remove button
                    const newRemoveBtn = newRow.querySelector('.remove-btn');
                    newRemoveBtn.addEventListener('click', function() {
                        this.closest('tr').remove();
                    });
                    
                    trainingTable.appendChild(newRow);
                }
            });
        }
        
        // Remove button events
        const removeButtons = document.querySelectorAll('.remove-btn');
        removeButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                const row = this.closest('tr');
                row.remove();
            });
        });
    }

    // Add download button functionality
    const downloadButtons = document.querySelectorAll('.btn-secondary');
    downloadButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Document prepared for download');
        });
    });
}); 