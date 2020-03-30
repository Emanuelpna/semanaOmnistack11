const request = require('supertest');
const app = require('../../src/app');

const database = require('../../src/database/connection');

describe('ONG', () => {
  beforeEach(async () => {
    await database.migrate.rollback();
    await database.migrate.latest();
  });

  afterAll(async () => {
    await database.destroy();
  });

  it('Should be able to create a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .set('Authorization', 'ong_id_valido')
      .send({
        name: 'Emanuel',
        email: 'emanuel@email.com',
        whatsapp: '32988888888',
        city: 'Juiz de Fora',
        uf: 'MG'
      });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});
