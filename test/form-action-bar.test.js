import { fixture, assert } from '@open-wc/testing';
import '../form-action-bar.js';

describe('<form-action-bar>', function() {
  async function basicFixture() {
    return (await fixture(`<form-action-bar></form-action-bar>`));
  }

  async function elevationFixture() {
    return (await fixture(`<form-action-bar elevation="3"></form-action-bar>`));
  }

  describe('Basics', () => {
    it('Sets initial elevation', async () => {
      const element = await basicFixture();
      assert.equal(element.elevation, 1);
    });

    it('Setting elevation sets the attribute', async () => {
      const element = await basicFixture();
      element.elevation = 5;
      assert.equal(element.getAttribute('elevation'), '5');
    });

    it('Ignores non numeric elevation', async () => {
      const element = await basicFixture();
      element.elevation = 'test';
      assert.equal(element.getAttribute('elevation'), '1');
    });

    it('elevation getter returns null when no elevation', async () => {
      const element = await basicFixture();
      element.removeAttribute('elevation');
      assert.equal(element.elevation, null);
    });

    it('elevation getter returns current value', async () => {
      const element = await basicFixture();
      assert.equal(element.elevation, 1);
    });

    it('Respects set elevation value', async () => {
      const element = await elevationFixture();
      assert.equal(element.elevation, 3);
    });
  });

  describe('a11y', () => {
    it('is accessible in default state', async () => {
      const element = await basicFixture();
      assert.isAccessible(element);
    });

    it('is accessible with elevation', async () => {
      const element = await elevationFixture();
      assert.isAccessible(element);
    });
  });
});
