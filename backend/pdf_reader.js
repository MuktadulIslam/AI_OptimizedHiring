const pdf = require('pdf-parse');
const natural = require('natural');

async function getContactInfo(textDataArray) {
    let length = textDataArray.length
    let  contactInfo = [];

    for(let i=0;i<length  && !(textDataArray[i] == 'Top Skills' || textDataArray[i] == 'Languages' || textDataArray[i] == 'Certifications' || textDataArray[i] == 'Honors-Awards' || textDataArray[i] == 'Experience' || textDataArray[i] == 'Education') ; i++) {
        contactInfo.push(textDataArray[i])
    }

    // Removing extra infomation
    contactInfo.shift();
    contactInfo.pop()
    return contactInfo;
    
}


async function getInformationFromPDF(pdfBuffer) {
    const textDataArray = (await pdf(pdfBuffer)).text.trim().split('\n');
    // console.log(textDataArray,"\n\n")
    const contactInfo = await getContactInfo(textDataArray)
    console.log(contactInfo)
}

module.exports = { 
    getInformationFromPDF
 };