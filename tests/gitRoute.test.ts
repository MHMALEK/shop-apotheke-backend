import request from 'supertest';
import server from '../src/bootstrap';
import { expect } from 'chai';
import 'mocha';

describe('Test GitApiController', () => {
  it('Should return 200 status when user request /repositories', async () => {
    const result = await request(server).get('/repositories').send();
    expect(result.status).to.equal(200);
  });
  it('Should return repos list', async () => {
    const result = await request(server).get('/repositories').send();
    expect(result.body.items).exist;
  });
  it('Should return 10 result when user set per_page query parameter to 10', async () => {
    const result = await request(server)
      .get('/repositories?per_page=10')
      .send();
    expect(result.body.items).exist;
    expect(result.body.items.length).to.equals(10);
  });
  it('Should return 50 result when user set per_page query parameter to 50', async () => {
    const result = await request(server)
      .get('/repositories?per_page=50')
      .send();
    expect(result.body.items).exist;
    expect(result.body.items.length).to.equals(50);
  });

  it('Should show item after specefic date when user pass created query parameter', async () => {
    const mockDate = new Date('2020-01-01').toISOString();
    const result = await request(server)
      .get(`/repositories?created=${mockDate}`)
      .send();
    expect(result.body.items).exist;
    const reposList = result.body.items;
    const newerDates = reposList.filter(
      ({ created_at }: any) => created_at < mockDate,
    );

    expect(newerDates.length).to.equals(0);
  });
});
