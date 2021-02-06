import request from 'supertest';
import server from '../src/bootstrap';

import { expect } from 'chai';
import 'mocha';

describe('Test IndexController', () => {
  it('Should give 200 status when user request /', async () => {
    const result = await request(server).get('/').send();
    expect(result.status).to.equal(200);
  });
  it('Should show "success word" when user request /', async () => {
    const result = await request(server).get('/').send();
    expect(result.status).to.equal(200);
    expect(result.text).to.equal('success');
  });
});
