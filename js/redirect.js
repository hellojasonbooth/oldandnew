
// redirect link one
const redirectLinkFirst = document.querySelector('a.collection-link.first')
const redirectTimeFirst = "1500"
const redirectURLFirst = "file:///Users/booth/Sites/oldandnew/collections/portugal.html"


function timedRedirect() {
	setTimeout("location.href = redirectURLFirst",redirectTimeFirst)
}

redirectLinkFirst.addEventListener('click', timedRedirect)




// const redirectLinkTwo = document.querySelector('a.collection-link.second')
// redirectLinkTwo.addEventListener('click', timedRedirect)