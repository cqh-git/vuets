class Snows {
    dom: any;
    constructor(dom: any) {
        this.dom = dom;
    }
    snow(left: number, height: number, src: string) {
        const div = document.createElement("div");
        const img = document.createElement("img");
        div.appendChild(img);
        img.className = "roll";
        img.src = src;
        div.style.left = left + "px";
        div.style.height = height + "px";
        div.style.position = "fixed";
        this.dom.appendChild(div);
        setTimeout(() => {
            this.dom.removeChild(div);
        }, 5000)
    }
}
export default Snows