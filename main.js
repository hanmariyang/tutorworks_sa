// Page navigation
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));
    const targetPage = document.getElementById(pageId);
    if (targetPage) targetPage.classList.add('active');
    const targetTab = document.querySelector(`[data-page="${pageId}"]`);
    if (targetTab) targetTab.classList.add('active');
}

// Tab click events
document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        const pageId = tab.getAttribute('data-page');
        showPage(pageId);
    });
});

// Modal functions
function showModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}
function hideModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}
// Close modal on outside click
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
});
// Tutor detail view
function showTutorDetail(tutorName) {
    showPage('tutor-detail');
    document.querySelector('#tutor-detail .page-title').textContent = `${tutorName} - 튜터 상세 정보`;
}
// Contract detail view
function showContractDetail(tutorName) {
    showPage('contract-detail');
    document.querySelector('#contract-detail .page-title').textContent = `${tutorName} - 계약 상세 정보`;
}
// Form submissions
document.addEventListener('DOMContentLoaded', function() {
    const newTutorForm = document.querySelector('#newTutorModal form');
    if (newTutorForm) {
        newTutorForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('새 튜터가 추가되었습니다!');
            hideModal('newTutorModal');
        });
    }
    const newContractForm = document.querySelector('#newContractModal form');
    if (newContractForm) {
        newContractForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('계약서 요청이 전송되었습니다!');
            hideModal('newContractModal');
        });
    }
});
// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.filter-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const rows = document.querySelectorAll('#tutors .table tbody tr');
            rows.forEach(row => {
                const name = row.cells[0].textContent.toLowerCase();
                const email = row.cells[1].textContent.toLowerCase();
                if (name.includes(searchTerm) || email.includes(searchTerm)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    }
});
// Pagination
document.querySelectorAll('.pagination-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        if (!this.classList.contains('active') && !this.textContent.includes('이전') && !this.textContent.includes('다음')) {
            const activeBtn = document.querySelector('.pagination-btn.active');
            if (activeBtn) activeBtn.classList.remove('active');
            this.classList.add('active');
        }
    });
});
// SA navigation smooth scroll
document.querySelectorAll('.sa-nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}); 