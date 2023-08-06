export default class Search {
    constructor(){
        this.myRender()
    }

    getTemplate(){
        return`
            <!-- SearchBox component -->
            <div data-element="searchBox">
                <form class="wert" action="/action_page.php">
                    <input type="text" class="search-box" placeholder="Search" name="search">
                </form>
            </div>`
        }

    myRender () {
        const wrapper = document.createElement('div');
        
        wrapper.innerHTML = this.getTemplate();
        
        this.element = wrapper.firstElementChild;
    }
    
}
