
// Example 1: Attribute

const widget = document.getElementById("widget");

console.log(" DATA ATTRIBUTE ");

console.log("Attribute:");
console.log(widget.getAttribute("data-widget-name"));

console.log("Property:");
console.log(widget.dataset.widgetName);

// Change using property
widget.dataset.widgetName = "sidebar";

console.log("After changing property:");

console.log("Attribute:");
console.log(widget.getAttribute("data-widget-name"));

console.log("Property:");
console.log(widget.dataset.widgetName);


// Example 2: href Attribute vs Property

console.log("\n HREF ATTRIBUTE VS PROPERTY ");

const links = document.querySelectorAll("a");

for (const link of links) {

  const hrefAttribute = link.getAttribute("href");
  const hrefProperty = link.href;


  console.log("Attribute:", hrefAttribute);
  console.log("Property :", hrefProperty);

  // Highlight external links
  if (
    hrefAttribute.includes("://") &&
    !hrefAttribute.startsWith("http://internal.com")
  ) {
    link.style.color = "orange";
  }
}


// Example 3: Custom Attribute

console.log("\n=== CUSTOM ATTRIBUTE ===");

const order = document.querySelector(".order");

console.log("Attribute:");
console.log(order.getAttribute("order-state"));

// Change the attribute
order.setAttribute("order-state", "pending");

console.log("After setAttribute():");
console.log(order.getAttribute("order-state"));