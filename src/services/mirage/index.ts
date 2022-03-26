// eslint-disable-next-line import/no-extraneous-dependencies
import { createServer, Factory, Model, Registry, Server } from 'miragejs';
// eslint-disable-next-line import/no-unresolved
import { AnyFactories } from 'miragejs/-types';
import faker from 'faker';

type User = {
  name: string;
  email: string;
  created_at: string;
};

export function makeServer(): Server<Registry<any, AnyFactories>> {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
    },
    factories: {
      user: Factory.extend<Partial<User>>({
        name(i: number) {
          return `User ${i + 1}`;
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        created_at() {
          return faker.date.recent(10);
        },
      }),
    },
    seeds(serverSeed) {
      serverSeed.createList('user', 10);
    },
    routes() {
      this.namespace = 'api';
      this.timing = 750;

      this.get('/users');
      this.post('/users');

      this.namespace = '';
      this.passthrough();
    },
  });

  return server;
}
