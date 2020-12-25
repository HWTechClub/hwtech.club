class CategoryState {

    constructor(numOfCategories)
    {
        this.state = 0;
        this.numOfStates = numOfCategories + 1;
    }

    showCategory()
    {
        if(this.state != 0 )
        {
            this.hideElements();
            this.showElements(this.state);
        }else{
            for(let i = 1; i < this.numOfStates; i++)
            {
                this.showElements(i);
            }
        }
        
    }

    hideElements()
    {
        for(let i = 1; i < this.numOfStates; i ++)
        {
            const elements = document.getElementsByClassName(`category-${i}`);
            for ( const e of elements)
            {
                if(! e.classList.contains("is-hidden"))
                {
                    e.classList.add("is-hidden")
                }
            }
        }
    }

    showElements(category)
    {
        const elements = document.getElementsByClassName(`category-${category}`);
        for ( const e of elements)
        {
            e.classList.remove("is-hidden");
        }
    }

}

document.addEventListener('DOMContentLoaded', () => {

    console.log("ready");
    // state of the categories 
    const state = new CategoryState(4);

    //get elements by class "category"
    const categoriesElements = document.getElementsByClassName("category");

    //add click listener to all the elements in category class
    for (let i = 0; i < categoriesElements.length; i++) {
        
        categoriesElements[i].addEventListener('click', (e) => {
            e.preventDefault();
            categoriesElements[state.state].classList.remove("is-active");
            categoriesElements[i].classList.add("is-active");
            state.state = i;
            state.showCategory();

        })
    }

    window.addEventListener("click", (e) => {
        console.log(e.target);
    })



})
