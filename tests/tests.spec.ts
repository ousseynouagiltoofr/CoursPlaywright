import { test, expect } from '@playwright/test';

test('Login', async ({ page }) => {
    await page.goto('https://app-dev.mossall.com/auth/login/');
  
    await page.getByPlaceholder('awafall@mossal.com').fill('genieouzog+atos@gmail.com');

    await page.getByPlaceholder('entrer votre mot de passe').fill('$Mossal1234');

    await page.getByRole('checkbox', { name : 'Se souvenir de moi'}).check();

    await page.getByRole('button', { name: 'Se connecter' }).click();

    await expect(page.getByText('Echéances Avance sur salaire')).toBeVisible();

  });

  test('Create collaborateur', async ({ page }) => {
    await page.goto('https://app-dev.mossall.com/auth/login/');
  
    await page.getByPlaceholder('awafall@mossal.com').fill('genieouzog+atos@gmail.com');

    await page.getByPlaceholder('entrer votre mot de passe').fill('$Mossal1234');

    await page.getByRole('checkbox', { name : 'Se souvenir de moi'}).check();

    await page.getByRole('button', { name: 'Se connecter' }).click();

    await expect(page.getByText('Echéances Avance sur salaire')).toBeVisible();

    await page.getByText('Collaborateurs').click();

    await page.getByText('Ajouter un collaborateur').click();

  });