import { expect } from "chai";
import * as faker from "faker";

describe("Registration", function() {
  afterEach(function() {
    browser.url("/account/settings");
    $("#delete_profile").click();
    $('.delete_account_b > button[type="submit"]').click();
    browser.pause(2000);
    $("#confirmModal button.confirm-modal-yes").click();
    browser.pause(2000);
  });

  it("via Sign Up page should be successful", function() {
    browser.url("/en/user/signup");
    browser.pause(2000);

    const email = faker.internet.email(undefined, undefined, "lazarenko.com");

    const userRegistrationName = email.slice(0, -14);
    $('input[name="RegistrationForm[email]"]').click();

    $('input[name="RegistrationForm[email]"]').setValue(email);
    $('input[name="RegistrationForm[username]"]').clearValue();
    $('input[name="RegistrationForm[username]"]').setValue(
      userRegistrationName
    );

    $('input[name="RegistrationForm[password]"]').clearValue();
    $('input[name="RegistrationForm[password]"]').setValue(
      userRegistrationName
    );
    $('input[name="RegistrationForm[passwordConfirm]"]').setValue(
      userRegistrationName
    );

    $("button#register_btn").click();
    browser.pause(2000);

    const userProfileName = $(".user-profile > .header-user-name").getText();

    console.log(userRegistrationName, " - userRegistrationName");
    console.log(userProfileName, " - userProfileName");

    expect(userProfileName).to.contain(userRegistrationName);
  });

  // it("via Sign Up PopUp should be successful", function() {
  //   const email = faker.internet.email(undefined, undefined, "lazarenko.com");
  //   const userRegistrationName = email.slice(0, -14);

  //   browser.url("/en");
  //   browser.pause(2000);
  //   $("span[data-target='#entryModal']").click();
  //   $("a#sign-up").click();
  //   browser.pause(2000);

  //   //$("[id*='registrationform-recaptcha-recaptcha']").setValue('03AOLTBLT7AY-ebjTPbEGNHv-m-TBzr7A_lOJg9Zg-YzEe4JgNORoDte99bDVEIL4mHrmdddiL1u_njZ2WUwj_hwt9gZ-olktEdLQbIjFA0TA8yhSTpspIdYEY0F75dtkNv0L0E7hWnumGbtvsuMZhzRKPI4v6CZnJCplHtuxiJP5KPdTZ6ahnaW42aRv6vMEZnJwmWj5WxKALso9aGZ1pOAJfjfGmRjpAq2Dieux0mF60cu1n6p26TdTSQA7lB01FSZeS9uIx2_kuBPO4MW2xuT7X34faajQSBLglmfmRuc94L8FQuBs-vt_zFPn9_MC2kyLW9H-Mr831Q7-LGjPJcjZgPNyX7Gzp7Tbygif8jzswN3NQuqJsd7iPqz4mxUvi2POiWIshjGJSZAFLZxfhIcX89EK-cPJN-rxYTLsI2kLmKRfAQIfAA-Y-2TOsHvOw8uy4zYmF8QKq');
  //   //$("[id*='registrationform-recaptcha-recaptcha']").click();
    
  //   $("input#registrationform-username").click();
  //   $("input#registrationform-username").setValue(userRegistrationName);

  //   $("input#user_email-popup").setValue(email);
  //   $("input#registrationform-password").setValue(userRegistrationName);
  //   $("input#registrationform-passwordconfirm").setValue(userRegistrationName);
  //   $("input[value='Sign up']").click();
  //   browser.pause(2000);

  //   const userProfileName = $(".user-profile > .header-user-name").getText();

  //   console.log(userRegistrationName, " - userRegistrationName");
  //   console.log(userProfileName, " - userProfileName");

  //   expect(userProfileName).to.contain(userRegistrationName);
  //   browser.pause(2000);
  // });
});
