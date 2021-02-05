class Snows {
    left: number;
    height: number;
    src: string;
    dom: any
    constructor(left: number, height: number, src: string, dom: any) {
        this.left = left;
        this.height = height;
        this.src = src;
        this.dom = dom;
    }
    snow() {
        var div = document.createElement("div");
        var img = document.createElement("img");
        div.appendChild(img);
        img.className = "roll";
        img.src = this.src;
        div.style.left = this.left + "px";
        div.style.height = this.height + "px";
        div.style.position = "fixed";
        this.dom.appendChild(div);
        setTimeout(() => {
            this.dom.removeChild(div);
        }, 5000)
    }
}
export default Snows