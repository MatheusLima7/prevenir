import { faker } from "@faker-js/faker";
import { Unit } from "@src/features/unit";

export default {
  items: Array(50)
    .fill({})
    .map((_, index): Unit => {
      if (index % 2 === 0) {
        return {
          unitId: String(index),
          photo: faker.image.url({ height: 125 }),
          name: faker.company.name(),
          address: faker.location.streetAddress({ useFullAddress: true }),
          email: faker.internet.email(),
          phone: faker.phone.number({ style: "national" }),
          city: faker.location.city(),
          state: faker.location.state(),
          zipCode: faker.location.zipCode(),
          coordinatorName: faker.person.fullName(),
          createdAt: faker.date.past().toString(),
          employees: faker.number.int({ min: 1, max: 100 }),
        };
      }

      return {
        unitId: String(index),
        photo: faker.image.url({ height: 125 }),
        name: faker.company.name(),
        address: faker.location.streetAddress({ useFullAddress: true }),
        email: faker.internet.email(),
        phone: faker.phone.number({ style: "national" }),
        city: faker.location.city(),
        state: faker.location.state(),
        zipCode: faker.location.zipCode(),
        coordinatorName: faker.person.fullName(),
        createdAt: faker.date.past().toString(),
        employees: faker.number.int({ min: 1, max: 100 }),
      };
    }),
};
