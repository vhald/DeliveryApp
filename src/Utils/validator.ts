// import React, {useState} from 'react';

// export const validName = (name: any) => {
//   // import these in validator.js
//   const fullName = String(name).trim().toLowerCase();
//   const fullname_test = fullName.length < 6;
//   if (fullname_test) {
//     setState((prev: any) => ({ ...prev, fullNameTestFail: true }));
//     return;
//   } else {
//     setState((prev: any) => ({ ...prev, fullNameTestFail: false }));
//   }
// };

export const validPassword = (pass: any) => {
  const password = String(pass).trim();
  // if (password.length >= 6) {
  //   setState((prev: any) => ({ ...prev, passwordTestFail: false }));
  // } else {
  //   setState((prev: any) => ({ ...prev, passwordTestFail: true }));
  //   return;
  // }
};

export const validEmail = (emailId: any) => {
  const email = String(emailId).trim().toLowerCase();
  const pattern =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  var email_test = pattern.test(email); // true , false
  return email_test;
};
