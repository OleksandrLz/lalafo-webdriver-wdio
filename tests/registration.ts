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

  it("via Sign Up PopUp should be successful", function() {
    const email = faker.internet.email(undefined, undefined, "lazarenko.com");
    const userRegistrationName = email.slice(0, -14);

    browser.url("/en");
    browser.pause(2000);
    $("span[data-target='#entryModal']").click();
    $("a#sign-up").click();
    browser.pause(2000);
    
    $("input#registrationform-username").click();
    $("input#registrationform-username").setValue(userRegistrationName);

    $("input#user_email-popup").setValue(email);
    $("input#registrationform-password").setValue(userRegistrationName);
    $("input#registrationform-passwordconfirm").setValue(userRegistrationName);
    $("input[value='Sign up']").click();
    browser.pause(2000);

    const userProfileName = $(".user-profile > .header-user-name").getText();

    console.log(userRegistrationName, " - userRegistrationName");
    console.log(userProfileName, " - userProfileName");

    expect(userProfileName).to.contain(userRegistrationName);
    browser.pause(2000);
  });
});
