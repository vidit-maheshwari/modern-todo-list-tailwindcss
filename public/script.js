

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container")




function css(element, style) {
    for (const property in style)
        element.style[property] = style[property];
}



function addTask(){
    if(inputBox.value === ''){
        alert('You Must Enter Something To Add')
    }
    else{
        // let li = document.createElement("li");
        // li.className = "p-2 text-lg font-semibold flex"
        // let span = document.createElement("span")
        // span.className = 'mr-2'
        // let span_img = document.createElement("img")
        // span_img.src = "../images/unchecked_icon.png"
        // li.innerHTML = inputBox.value;
        // li.style.padding = '5px'

        // listContainer.appendChild(li)
        // li.appendChild(span)
        // span.appendChild(span_img)

        // ORIGINAL CODE STARTS 

        // let span = document.createElement("span")
        // span.className = 'flex ml-2 mt-3 mb-4'
        // let li = document.createElement("li");
        // let span_img = document.createElement("img")
        // span_img.src = '../images/unchecked_icon.png'
        // span_img.className = 'h-5 w-5 mt-1 mr-2'
        // li.className = "p-2 text-lg font-semibold flex "
        // li.innerHTML = inputBox.value;
        // li.style.padding = '0px'
        // listContainer.appendChild(span)
        // span.appendChild(span_img)
        // span.appendChild(li)

        // span.onclick = function(){
        //     span_img.src = '../images/checked_icon.png'
        //     li.className = 'checked p-2 text-lg font-semibold flex line-through'
        //     span.className = 'flex ml-2 mt-3 mb-4 bg-grey'
        // }
       
        // ORIGINAL CODE ENDS 

        // let span = document.createElement("span")
        // span.className = 'flex ml-2 mt-3 mb-4'
        // let li = document.createElement("li");
        // let span_img = document.createElement("img")
        // span_img.src = '../images/unchecked_icon.png'
        // span_img.className = 'h-5 w-5 mt-1 mr-2'
        // li.className = "p-2 text-lg font-semibold flex "
        // li.innerHTML = inputBox.value;
        // li.style.padding = '0px'
        // listContainer.appendChild(span)
        // span.appendChild(span_img)
        // span.appendChild(li)

        // span.onclick = function(){
        //     if (li.classList.contains('checked')) {
        //         // If already checked, toggle to unchecked
        //         span_img.src = '../images/unchecked_icon.png'
        //         li.classList.remove('checked', 'line-through')
        //         span.classList.remove('bg-grey')
        //     } else {
        //         // If unchecked, toggle to checked
        //         span_img.src = '../images/checked_icon.png'
        //         li.classList.add('checked', 'line-through')
        //         span.classList.add('bg-grey')
        //     }
        // }

        

        // let span = document.createElement("span")
        // span.innerHTML = '\u00d7';
        // span.style.position = 'absolute'
        // span.style.marginLeft = '30px'
        // span.style.marginTop = '0px'
        // span.style.alignContent = 'right'
        // li.appendChild(span)

        // let span = document.createElement("span")
        // let span_img = document.createElement("img")
        // span_img.src = "../images/unchecked_icon.png"
        // span.appendChild(span_img)
        // li.appendChild(span)

        let span = document.createElement("span");
        span.className = 'flex ml-2 mt-3 mb-4 ';
        let li = document.createElement("li");
        let span_img = document.createElement("img");
        let cross_icon = document.createElement("img");

        span_img.src = '../images/unchecked_icon.png';
        cross_icon.src = '../images/cross_icon.png';

        span_img.className = 'h-5 w-5 mt-1 mr-2';
        cross_icon.className = 'h-5 w-5 ml-5 mt-1 cursor-pointer';

        li.className = "p-2 text-lg font-semibold flex text-balance  ";
        li.innerHTML = inputBox.value;
        li.style.padding = '0px';

        listContainer.appendChild(span);
        span.appendChild(span_img);
        span.appendChild(li);
        li.appendChild(cross_icon);
        inputBox.value = ''
        

        span.onclick = function(){
            if (li.classList.contains('checked')) {
                // If already checked, toggle to unchecked
                span_img.src = '../images/unchecked_icon.png';
                li.classList.remove('checked', 'line-through');
                span.classList.remove('bg-grey');
            } else {
                // If unchecked, toggle to checked
                span_img.src = '../images/checked_icon.png';
                li.classList.add('checked', 'line-through');
                span.classList.add('bg-grey');
            }
        }

        cross_icon.onclick = function(){
            // Remove the parent li element when cross icon is clicked
            listContainer.removeChild(span);
        }

                
            }

   
}


