

const redirectLinkOne = document.querySelector('a.collection-link')

redirectTime = "2200"
redirectURL = "file:///Users/rosannafaithnew/Sites/oldandnew/collections/portugal.html"

function timedRedirect() {
	setTimeout("location.href = redirectURL",redirectTime)
}

redirectLinkOne.addEventListener('click', timedRedirect)