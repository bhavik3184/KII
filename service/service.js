// (function() {
//         var app = angular.module("kiiWeb");

//         var service = function($http) {
//             var sendmail = function() {
//                 $.ajax({
//                         type: "POST",
//                         url: "https: //mandrillapp.com/api/1.0/messages/send.json",
//                         data: {
//                             'key': '8PDOTKUKNKGI5eDO8OZ4fw',
//                             'message': {
//                                 'from_email': 'bhavik3184@gmail.com',
//                                 'to': [{
//                                         'email': 'bhavik3184@gmail.com',
//                                         'name': 'Bhavik',
//                                         'type': 'to'
//                                     }],
//                             'autotext': 'true',
//                             'subject': 'YOUR SUBJECT HERE!',
//                             'html': 'YOUR EMAIL CONTENT HERE!YOU CAN USE HTML!'
//                         }
//                     }
//                 }).done(function(response) {
//                 console.log(response); // if you're into that sorta thing
//             });
//         };

//         return {
//             sendmail: sendmail
//         };
//     };


//     app.factory("service", service);
// }());