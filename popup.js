function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}


const RightColumn = getElementByXpath("//*[@id='main']/div/div/div[2]");

//Hidden right column
RightColumn.hidden = true;

// get lft column 
const LeftColumn = getElementByXpath("//*[@id='main']/div/div/div[1]");

//get selector
const bat = document.querySelector('.col-md-8');
// remove col-md-8 class
bat.classList.remove('col-md-8');

//add col-md-12 class
bat.classList.add('col-md-12');


//two column item lyrics
const twocolum = getElementByXpath("//*[@id='main']/div/div/div[1]/div[2]/div/div[2]/div/div[2]/span/a[4]");

const musicText = getElementByXpath("//*[@id='music_text']");

musicText.classList.add('split2');

musicText.style.fontSize = "20px";

musicText.style.fontWeight = "bold";
musicText.style.textShadow = "none";