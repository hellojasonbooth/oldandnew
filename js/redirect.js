

const redirectLinkOne = document.querySelector('a.collection-link.first')
const redirectLinkTwo = document.querySelector('a.collection-link.second')

const redirectTime = "2200"
const redirectURL = "file:///Users/rosannafaithnew/Sites/oldandnew/collections/portugal.html"

function timedRedirect() {
	setTimeout("location.href = redirectURL",redirectTime)
}

redirectLinkOne.addEventListener('click', timedRedirect)
redirectLinkTwo.addEventListener('click', timedRedirect)