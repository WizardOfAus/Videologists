// let changeColor = document.getElementById('changeColor');
//
// chrome.storage.sync.get('color', function(data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
// });
//
//
// changeColor.onclick = function(element) {
//   let color = element.target.value;
//   chrome.tabs.query({
//     active: true,
//     currentWindow: true
//   }, function(tabs) {
//     chrome.tabs.executeScript(
//       tabs[0].id, {
//         code: 'document.body.style.backgroundColor = "' + color + '";'
//       });
//   });
// };

window.addEventListener('load', function(evt) {
  document.getElementById('form')
            .addEventListener('submit', saveEntry);
});


function load() {


  // let address = element.target.value;
  // let startTime = element.target.startTime;
  // let endTime = element.target.endTime;
  //
  // chrome.storage.local.get('data', function (result) {
  //       channels = result.channels;
  //       alert(result.channels);
  //       $("#channels").val(channels);
  //   });
}

function saveEntry(){
  event.preventDefault();
  let formData = document.getElementById('form');

  console.log(formData);
  // chrome.storage.local.set({http: value}, function() {
  //         console.log('Value is set to ' + value);
  //       });
}
