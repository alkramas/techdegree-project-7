














// search users
//read input from search field
const searchInput = document.querySelector('#userSearch');
const membersAll = document.querySelectorAll('.members-container');
//when single member filtered, or clicked: highlight element
const memberContainerAll = document.querySelectorAll('.members-container');



searchInput.addEventListener ('input', function() {
  let searchInputValue = searchInput.value.toLowerCase();

  for (let i = 0; i < membersAll.length; i += 1) {
    let memberThis = membersAll[i];
    let memberInfoContainer = memberThis.querySelector('.member-info-container');
    let memberTextContainer = memberInfoContainer.lastElementChild;
    let memberName = memberTextContainer.firstElementChild.innerHTML.toLowerCase();
    let memberEmail = memberTextContainer.lastElementChild.innerText;
    console.log(memberName);
    console.log(searchInputValue);

    let searchMatch = memberName.includes(searchInputValue);

    if ( searchMatch == true ) {
        memberThis.style.display = 'flex';
        // memberThis.classList = 'show';
    }
    else {
      memberThis.style.display = 'none';
    }
  }
});




// select member from section new members
// add email to input search user
let membersSelection = document.querySelectorAll('.members-container');
// console.log(membersSelection);
let messageUserSearch = document.querySelector('#userSearch');
let selectedMember = document.querySelector('.show');

for (let i = 0; i < membersSelection.length; i += 1) {
    membersSelection[i].addEventListener('click', function(event) {
      let membersInfoContainer = membersSelection[i].firstElementChild;
      let membersText = membersInfoContainer.lastElementChild;
      let membersEmail = membersText.lastElementChild.innerText;

      messageUserSearch.value = membersEmail;
      console.log(membersEmail);

    // if (selectedMember === null) {
    //       this.classList = 'show';
    //       selectedMember.classList.remove('show');
    //   }

    });
};








// save user input to localStorage
// 1st function to save value of input element
function saveInputLocal(inputElementId, storageElementName) {
  let  selector = "#" + inputElementId;
  let inputElement = document.querySelector(selector);
  let inputId = inputElement.id;

  let storageName = inputId;
  let storageValue = inputElement.value;
  let storageChecked = inputElement.checked;
  // console.log('storageName: ' + storageName + ', storageValue is: ' + storageChecked);
  // console.log(inputElement);

  if (inputElement.type === 'select-one') {
    // console.log('select element has been changed');
    localStorage.setItem( storageName, storageValue );
    // console.log( localStorage.getItem(storageName) );
  } else if (inputElement.type === 'checkbox') {
    localStorage.setItem( storageName, storageChecked);
    // console.log( localStorage.getItem(storageName) );
  }

};
// call save function on event change of input
document.querySelector('.settings').addEventListener('change', function(e){
  let id = e.target.id;
  console.log('the event target object is the element with id #' + id);
  saveInputLocal(id, id);
});

// get values in storage
function getStoredInputValues() {
  // loop through input elements
  let inputElements = document.querySelectorAll('.user-input');
  for (i = 0; i < inputElements.length; i += 1) {
      let thisElement = inputElements[i];
      let thisId = thisElement.id;
      // console.log(thisElement);
      // console.log(thisId);

      let thisStorageValue = localStorage.getItem(thisId);
      // console.log('the storage value of this element is: ' + thisStorageValue);

      if (thisElement.type === 'select-one') {
        thisElement.value = thisStorageValue;
      } else if (thisElement.type === 'checkbox') {
        if (thisStorageValue === 'false') {
          thisElement.checked = false;
        } else if (thisStorageValue === 'true') {
          thisElement.checked = true;
        }
        // thisElement.value = thisStorageValue;
      }
  }
};

getStoredInputValues();
