// Components for HealthNexus Platform
const components = {
    // Check for user auth state
    getAuthRole: function() {
        return localStorage.getItem('nexus_user_role');
    },

    renderNavbar: function(viewId) {
        const role = this.getAuthRole();
        const navbarPlaceholder = document.getElementById('navbar-placeholder');
        if (!navbarPlaceholder) return;

        let actionHtml = '';
        if (role) {
            const dashboardLink = role === 'hospital' ? 'hospital-dashboard.html' : 'patient-dashboard.html';
            actionHtml = `
                <div class="nav-auth-group">
                    <a href="${dashboardLink}" class="btn-dashboard">Dashboard</a>
                    <button onclick="app.logout()" class="btn-logout-minimal">Logout</button>
                </div>
            `;
        } else {
            actionHtml = `<a href="login.html" class="btn-sos btn-login-neon">Login</a>`;
        }

        navbarPlaceholder.innerHTML = `
        <nav class="navbar navbar--nexus" id="mainNav">
            <div class="nav-container">
                <a href="index.html" class="logo">
                    <i class="fa-solid fa-heart-pulse logo-icon"></i>
                    <span class="logo-text">HealthNexus</span>
                </a>
                <ul class="nav-links">
                    <li><a href="index.html#view-home" class="${viewId === 'home' ? 'active' : ''}">Home</a></li>
                    <li><a href="index.html#about">About</a></li>
                    <li><a href="index.html#features">Features</a></li>
                    <li><a href="index.html#faq">FAQ</a></li>
                </ul>
                <div class="nav-actions">
                    ${actionHtml}
                </div>
                <div class="mobile-toggle">
                    <i class="fa-solid fa-bars"></i>
                </div>
            </div>
        </nav>
        `;

        // Re-initialize mobile toggle if needed
        const toggle = document.querySelector('.mobile-toggle');
        const navLinks = document.querySelector('.nav-links');
        if (toggle && navLinks) {
            toggle.onclick = () => navLinks.classList.toggle('active');
        }
    },

    renderFooter: function() {
        const footerPlaceholder = document.getElementById('footer-placeholder');
        if (!footerPlaceholder) return;

        footerPlaceholder.innerHTML = `
        <footer class="footer footer--nexus">
            <div class="footer-glow-line" aria-hidden="true"></div>
            <div class="footer-content">
                <div class="footer-brand">
                    <div class="footer-logo">
                        <i class="fa-solid fa-heart-pulse"></i>
                        <span>HealthNexus</span>
                    </div>
                    <p>Empowering healthcare through technology and compassion. Your 24/7 smart health shield.</p>
                    <div class="footer-social">
                        <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                        <a href="#"><i class="fa-brands fa-youtube"></i></a>
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
                    </div>
                </div>
                
                <div class="footer-contact">
                    <h4>Contact Us</h4>
                    <p><i class="fa-solid fa-envelope"></i> support@healthnexus.com</p>
                    <p><i class="fa-brands fa-google"></i> nexus.health@gmail.com</p>
                    <p><i class="fa-solid fa-phone"></i> +1 (555) 000-HEALTH</p>
                    <div class="footer-location">
                        <i class="fa-solid fa-location-dot"></i> Nexus Tower, Tech City
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 HealthNexus Platform. All rights reserved.</p>
                <p style="font-size:0.8rem; color:var(--text-secondary); margin-top:0.3rem;">
                    Designed &amp; Developed by <strong style="color:var(--accent-blue);">Team AI Illuminate</strong>
                </p>
                <div class="footer-legal">
                    <a href="#">Privacy Policy</a>
                    <span class="separator">|</span>
                    <a href="#">Terms of Service</a>
                </div>
            </div>
        </footer>
        `;
    }
};

// Auto-inject common elements if functions not called manually
document.addEventListener('DOMContentLoaded', () => {
    // If renderNavbar hasn't been called yet, do a default one
    if (document.getElementById('navbar-placeholder') && !document.querySelector('.navbar')) {
        components.renderNavbar('home');
    }
    if (document.getElementById('footer-placeholder') && !document.querySelector('.footer')) {
        components.renderFooter();
    }
});
