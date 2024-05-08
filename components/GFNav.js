class GFNav extends HTMLElement {
    constructor() {
        super();
    }


    connectedCallback() {
        // isolate substring of path from URL (gets everything after final `/`)
        const currentUrl = window.location.href;
        const Arr = currentUrl.split("/");
        const currentPath = Arr[Arr.length - 1]


        this.innerHTML = `
    <nav class="gf-nav">
        <ul>
            <li id="grid-index-link" class="">
                <a href="./grid-index.html">Explore CSS Grid</a>
            </li>
            <li id="flex-index-link" class="">
                <a href="./flex-index.html">Explore Flexbox</a>
            </li>
        </ul>
        <div>
            <ul>
                <a href="./index.html"><li id="b2b-link">Back to basic layouts</li></a>
            </ul> 
        </div>
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
            default: document.getElementById("b2b-link").classList.add("active-link");
        }
    }
}

customElements.define('gf-nav-component', GFNav);