describe('data', () => {

  it('debería exponer función  en objeto global', () => {
    assert.isFunction();
  });

  it('debería exponer función  en objeto global', () => {
    assert.isFunction();
  });

 

  describe("Login We Work Comunal", () => {

    var firebasemock = require('firebase-mock');

    var mockauth = new firebasemock.MockAuthentication();
    var mockdatabase = new firebasemock.MockFirebase();
    var mockfirestore = new firebasemock.MockFirestore();
    var mockstorage = new firebasemock.MockStorage();
    var mockmessaging = new firebasemock.MockMessaging();
    var mocksdk = new firebasemock.MockFirebaseSdk(
      (path) => {
        return path ? mockdatabase.child(path) : mockdatabase;
      },
      () => {
        return mockauth;
      },
      () => {
        return mockfirestore;
      },
      () => {
        return mockstorage;
      },
      () => {
        return mockmessaging;
      }
    );
 

  });


});
