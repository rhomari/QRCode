

class CustomButton extends HTMLElement {
    constructor(){
        super();
        this.shadowdom = this.attachShadow({mode:'open'})
        
        
    }
    get caption(){
        return this.getAttribute('caption')
    }
    set caption(v){
        this.setAttribute('caption') = v
    }
    static get observedAttributes(){
        return ['caption']
    }
    attributeChangedCallback(prop, ov,nv){
        console.log(prop)
        this.render()
    }
    connectedCallback(){
        this.render()

    }
    disconnectedCallback(){

    }
    render(){
       
        
        this.shadowdom.innerHTML =`
        <style>
        .custombuttonclassname {
            text-align:center;
            text-decoration: none;
            font-size: 14px;
            color: #FFF;
            background: #0CADA7;
            padding: 10px 30px;
            display: inline-block;
            white-space: nowrap;
            width : 75px;
            height : 20px;
            border-radius: 5px;
            margin: 10px 0;
            transition: all 0.2s ease-in-out;
        }
        .custombuttonclassname:hover {
            background: #0A948F;
        }
        </style>
        
        <a href="#" class="custombuttonclassname" >${this.caption}</a>
        
        `
        
    }
    

}
window.customElements.define("custom-button", CustomButton)