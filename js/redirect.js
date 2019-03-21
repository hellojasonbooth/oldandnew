
// redirect link one
const redirectLinkFirst = document.querySelector('a.collection-link.first')
const redirectTimeFirst = "1800"
const redirectURLFirst = "file:///Users/rosannafaithnew/Sites/oldandnew/collections/portugal.html"

function timedRedirect() {
	setTimeout("location.href = redirectURLFirst",redirectTimeFirst)
}

redirectLinkFirst.addEventListener('click', timedRedirect)




// const redirectLinkTwo = document.querySelector('a.collection-link.second')
// redirectLinkTwo.addEventListener('click', timedRedirect)