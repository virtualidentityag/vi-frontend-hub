# Security
Level: *Hidden Hippopotamus*

**The security aspects of your projects are just as important as performance and UX!**

A very good place to start getting an overview is the free and open software security community: The [OWASP Foundation](https://www.owasp.org/).
Every couple of years they publish a list of the most critical frontend and backend security risks, the **Top Ten List**.
> A powerful awareness document for web application security that represents a broad consensus about the most critical security risks to web applications

Download latest Top Ten PDF here: https://www.owasp.org/images/7/72/OWASP_Top_10-2017_%28en%29.pdf.pdf

Although many security issues in this list refer to Backend it's very important
for any Frontend Developer to know the few that are frontend-related very well, and at least the theory for those which are backend-related.


## Golden Rule for Frontend Development

**NEVER EVER LEAVE INCOMING DATA UNATTENDED!!!**

This rule especially applies to all data you use in your frontend code and that could somehow be executed in the DOM.
See following types of data and the XSS Game below for real-world examples.


## Types of incoming data

### URL parameters

Incoming data from URL parameters is considered the most critical security risk.
This data might be easily injected from incoming links even if the website is read-only.

Some very simple and unsafe jQuery snippet example:
```
// Example-URL: `www.domain.com?search=foo`
// ... grab parameter directly from URL and paste the search word above the results
$('.search__searchPhrase').html(urlParams['search']);
```
Try this example with a search parameter like `www.domain.com/search=<script>alert('XSS')</script>`

Always ask yourself what data you really need and if the method that writes this data to the DOM might be dangerous in terms of appending and executing JavaScript.


**Escaping or parsing to the rescue.**

An easy method for incoming strings might be:
```js
// this creates text-only and not executable code for the DOM
function escapeHTML (unsafeString) {
    return unsafeString
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\"/g, '&quot;')
      .replace(/\'/g, '&#39;');
}
```

What if you expect integer or float numbers?
```js
parseInt(unsafeInteger, 10);
parseFloat(unsafeFloat);
```


### Form data / AJAX calls

You might think this is a Backend-only issue but in times of Single Page Apps all around us this is always a Frontend issue too.
Most template engines escape there contents by default and you must actively disable this feature.
But always be aware whatever technology you use that automatic escaping is activated.

```js
const foo = '<span>';

// Handlebars:
{{ foo }}           // &lt;span%gt;
{{{ foo }}}         // <span>

// Nunjucks:
{{ foo }}           // &lt;span%gt;
{{ foo | safe }}    // <span>
```


## Time to play

Learn about XSS by playing the [XSS Game](https://xss-game.appspot.com)

<authors-component v-bind:authors="[
    {
      username: 'jurekbarth',
      name: 'Jurek Barth'
    }]"/>

---------------------------------------

_**Please remember the Boy Scout Rule and leave this page better than you found it.**_