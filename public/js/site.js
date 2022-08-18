// Waits until the document is loaded without jQuery
document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    console.log('loaded?');
  }
};