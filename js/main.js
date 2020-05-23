/* ============================================= */
/*              DOM variables                    */
/* ============================================= */

const $nameInput = $(`#name`);
const $emailInput = $(`#email`);
const $messageTextArea = $(`#message`);
const $submitButton = $(`#submit`);

/* ============================================= */
/*              Variables                        */
/* ============================================= */


/* ============================================= */
/*              Helper/Logic functions           */
/* ============================================= */

const convertStringToBoolean = string => {
    return (string === `true`);
};

const convertDateStringToMMDDYY = (dateString) => {
    return moment(dateString).calendar();
};

const checkStatus = (response) => {
    if (response.ok) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response.statusText));
    }
};

const fetchData = (url) => {
    return fetch(url)
            .then(checkStatus)
            .then(res => res.json())
            .catch(error => console.log(`Looks like there was a problem fetching the data: ${error}`));
};

const parseJSON = (jsonData) => {

};

/* ============================================= */
/*              On page load                     */
/* ============================================= */

// A $( document ).ready() block. This is fired when the page is completely loaded
$(document).ready( ()=> {

});

/* ============================================= */
/*              Event listeners                  */
/* ============================================= */

$submitButton.on(`click`, (event) => {
    // prevent browser default
    event.preventDefault();

    // prevent user from submitting if fields are empty
    const nameString = $nameInput.val();
    const emailString = $emailInput.val();
    const messageString = $messageTextArea.val();

    if (nameString === `` || emailString === `` || messageString === ``) {
        alert(`Please fill out required fields!`);
    }
});