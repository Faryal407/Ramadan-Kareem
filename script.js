function readMore() {
    let text = `leading-relaxed text-lg mb-4">Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami
    everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexua leading-relaxed text-lg mb-4">Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami 
     leading-relaxed text-lg mb-4">Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami
     leading-relaxed text-lg mb-4">Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami
     leading-relaxed text-lg mb-4">Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami
     leading-relaxed text-lg mb-4">Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami
     leading-relaxed text-lg mb-4">Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami
     leading-relaxed text-lg mb-4">Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami
     leading-relaxed text-lg mb-4">Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami
     leading-relaxed text-lg mb-4">Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami
     leading-relaxed text-lg mb-4">Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami
     leading-relaxed text-lg mb-4">Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami
     leading-relaxed text-lg mb-4">Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami
     leading-relaxed text-lg mb-4">Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami
     leading-relaxed text-lg mb-4">Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami.`;
     document.getElementById("readmore").innerHTML = text;
}


// next section

const hideText = document.getElementById("hideText");
const link = document.getElementById("textlink");

link.onclick = () => {
    if(hideText.style.display === "none"){
        hideText.style.display = "inline";
        link.textContent = "Read Less";
    }
    else{
        hideText.style.display = "none";
        link.textContent = "Read More";
    }
}