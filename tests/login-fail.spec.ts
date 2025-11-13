import { test } from '../fixtures/pom.fixture'


test('shows error on invalid user', async ({ pm }) => {
    await pm.loginPage.openLoginPage();
    await pm.loginPage.userLogin('badUser', 'wrongPass');
    await pm.securePage.assertSuccess();

});