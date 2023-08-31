const renderResponse=(res)=>{
    if(res.errors){
        responseField.innerHTML='<p>Sorry, we couldn\'t process that URL.</p><p>PLease,Try Again.</p> '
    }else{
        responseField.innerHTML=`<p>You\'re shortened URL is :</p><p> ${res.shortUrl} </p>`
    }
}

const renderRawResponse=(res)=>{
    if(res.errors){
        responseField.innerHTML='<p>Sorry, we couldn\'t process that URL.</p><p>PLease,Try Again.</p> '
    }else {
        let StructuredResponse = JSON.stringify(res).replace(/,/g,',\n');
        StructuredResponse=`<pre>${StructuredResponse}</pre>`
        responseField.innerHTML=`${StructuredResponse}`
    }
}