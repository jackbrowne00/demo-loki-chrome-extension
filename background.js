function reddenPage() {
  // Change color to green
  document.body.style.backgroundColor = "orange";

  // Add a div, give it some text and append to the end of the body
  const newDiv = document.createElement("div");
  const newContent = document.createTextNode("Hi there and greetings!");
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv);

  // Select the H1 with the class "cdd-barvug", change the innerHTML to text
  const thisOneHere = document.querySelector("h1.css-barvug");
  thisOneHere.innerHTML = "";

  // select the span tag: <span data-slate-object="text" data-key="0">hi</span>
  // erase all the elements within it
  // set the inner HTML to the query
  const htmlInside = `<span data-slate-object="text" data-key="0"><span data-slate-leaf="true" data-offset-key="0:0"><span class="prism-token token 0 context-labels punctuation"><span data-slate-string="true">{</span></span></span><span data-slate-leaf="true" data-offset-key="0:1"><span class="prism-token token 0 context-labels label-key attr-name"><span class="prism-token token 0 context-labels punctuation"><span data-slate-zero-width="z" data-slate-length="0">﻿</span></span></span></span><span data-slate-leaf="true" data-offset-key="0:2"><span class="prism-token token 0 context-labels label-key attr-name"><span data-slate-string="true">container_name</span></span></span><span data-slate-leaf="true" data-offset-key="0:3"><span class="prism-token token 0 context-labels"><span class="prism-token token 0 context-labels label-key attr-name"><span data-slate-zero-width="z" data-slate-length="0">﻿</span></span></span></span><span data-slate-leaf="true" data-offset-key="0:4"><span class="prism-token token 0 context-labels"><span data-slate-string="true">=~</span></span></span><span data-slate-leaf="true" data-offset-key="0:5"><span class="prism-token token 0 context-labels label-value attr-value"><span class="prism-token token 0 context-labels"><span data-slate-zero-width="z" data-slate-length="0">﻿</span></span></span></span><span data-slate-leaf="true" data-offset-key="0:6"><span class="prism-token token 0 context-labels label-value attr-value"><span data-slate-string="true">"/r-website-staging-worker-content.+"</span></span></span><span data-slate-leaf="true" data-offset-key="0:7"><span class="prism-token token 1 punctuation"><span class="prism-token token 0 context-labels label-value attr-value"><span data-slate-zero-width="z" data-slate-length="0">﻿</span></span></span></span><span data-slate-leaf="true" data-offset-key="0:8"><span class="prism-token token 1 punctuation"><span data-slate-string="true">}</span></span></span></span>`;
  const number1 = `<span data-slate-leaf="true" data-offset-key="0:0"><span class="prism-token token 0 context-labels punctuation"><span data-slate-string="true">{</span></span></span>`;
  const number2 = `<span data-slate-leaf="true" data-offset-key="0:1"><span class="prism-token token 0 context-labels label-key attr-name"><span class="prism-token token 0 context-labels punctuation"><span data-slate-zero-width="z" data-slate-length="0">﻿</span></span></span></span>`;
  const number3 = `<span data-slate-leaf="true" data-offset-key="0:2"><span class="prism-token token 0 context-labels label-key attr-name"><span data-slate-string="true">container_name</span></span></span>`;
  const number4 = `<span data-slate-leaf="true" data-offset-key="0:3"><span class="prism-token token 0 context-labels"><span class="prism-token token 0 context-labels label-key attr-name"><span data-slate-zero-width="z" data-slate-length="0">﻿</span></span></span></span>`;
  const number5 = `<span data-slate-leaf="true" data-offset-key="0:4"><span class="prism-token token 0 context-labels"><span data-slate-string="true">=~</span></span></span>`;
  const number6 = `<span data-slate-leaf="true" data-offset-key="0:5"><span class="prism-token token 0 context-labels label-value attr-value"><span class="prism-token token 0 context-labels"><span data-slate-zero-width="z" data-slate-length="0">﻿</span></span></span></span>`;
  const number7 = `<span data-slate-leaf="true" data-offset-key="0:6"><span class="prism-token token 0 context-labels label-value attr-value"><span data-slate-string="true">"/r-website-staging-worker-content.+"</span></span></span>`;
  const number8 = `<span data-slate-leaf="true" data-offset-key="0:7"><span class="prism-token token 1 punctuation"><span class="prism-token token 0 context-labels label-value attr-value"><span data-slate-zero-width="z" data-slate-length="0">﻿</span></span></span></span>`;
  const number9 = `<span data-slate-leaf="true" data-offset-key="0:8"><span class="prism-token token 1 punctuation"><span data-slate-string="true">}</span></span></span>`;
  const inputBoxParent = document.querySelector(
    "span[data-slate-object='text']"
  );
  inputBoxParent.innerHTML = `${number1}${number2}${number3}${number4}${number5}${number6}${number7}${number8}${number9}`;
}
{
  /* <span data-slate-object="text" data-key="0">hi</span> */
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: reddenPage,
  });
});

{
  /* <span data-slate-leaf="true" data-offset-key="0:0">
  <span class="prism-token token 0 context-labels punctuation">
    <span data-slate-string="true">
      {(container_name = ~"/r-website-staging-worker-content.+")}
    </span>
  </span>
</span>; */
}
