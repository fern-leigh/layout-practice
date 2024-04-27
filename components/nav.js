class Nav extends HTMLElement {
    constructor() {
        super();
    }


    connectedCallback() {
        const currentUrl = window.location.href;
        console.log(currentUrl);

        const curentPathArr = currentUrl.split("/");
        const currentPath = curentPathArr[curentPathArr.length - 1]

        console.log(currentPath);




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
            default: console.log("switch works but path wrong")
        }
    }
}

customElements.define('nav-component', Nav);