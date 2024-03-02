class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
        <input type="checkbox" name="" id="toggler">
        <label for="toggler" class="fas fa-bars"></label>
        <a href="../index.html" class="logo">Erwin Dangan Portfolio<span>.</span></a>
        <nav class="navbar">
            <a href="../index.html">Home</a>
            <a href="../pages/aboutMe.html">About</a>
            <a href="../pages/logo.html">My Design</a>
            <a href="../pages/review.html">Review</a>
            <a href="../pages/contact.html">Contact</a>
        </nav>
        <!--<div class="icons">
            <a href="#" class="fas fa-heart"></a>
        </div>-->
        </header>
        `
    }
}

class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section class="footer">
        <div class="credit">
            &copy; Created by <span class="created">E.Dangan</span> All Rights Reserved.
            <h2>Email: <span>encrypt73@gmail.com</span></h2>
            <h2>Phone: 09974991498</h2>
        </div>
    </section>          
        `
    }
}

customElements.define('special-header', SpecialHeader)
customElements.define('special-footer', SpecialFooter)