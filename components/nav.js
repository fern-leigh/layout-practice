class Nav extends HTMLElement {
    constructor() {
        super();
    }


    connectedCallback() {
        // isolate substring of path from URL (gets everything after final `/`)
        const currentUrl = window.location.href;
        const Arr = currentUrl.split("/");
        const currentPath = Arr[Arr.length - 1]


        this.innerHTML = `
    <nav>
        <ul>
            <li id="index-link" class="">
                <a href="index.html">Default</a>
            </li>
            <li id="relative-link" class="">
                <a href="./relative.html">Relative</a>
            </li>
            <li id="absolute-link" class="">
                <a href="./absolute.html">Absolute</a>
            </li>
            <li id="fixed-link" class="">
                <a href="./fixed.html">Fixed</a>
            </li>
            <li id="sticky-link" class="">
                <a href="sticky.html">Sticky</a>
            </li>
        </ul>
    </nav>
    `;

    // Add class 'active-link' to nav item based on current path 
        switch (currentPath) {
            case 'index.html': document.getElementById("index-link").classList.add("active-link");
                break;
            case 'relative.html': document.getElementById("relative-link").classList.add("active-link");
                break;
            case 'absolute.html': document.getElementById("absolute-link").classList.add("active-link");
                break;
            case 'fixed.html': document.getElementById("fixed-link").classList.add("active-link");
                break;
            case 'sticky.html': document.getElementById("sticky-link").classList.add("active-link");
                break;
            default: console.log("uunable to identify path")
        }
    }
}

customElements.define('nav-component', Nav);