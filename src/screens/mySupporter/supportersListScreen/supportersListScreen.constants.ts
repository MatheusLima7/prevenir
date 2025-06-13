import { faker } from "@faker-js/faker";
import { Supporter } from "../mySupporter.types";

export const data: Supporter[] = [
  {
    id: faker.string.uuid(),
    mentorId: faker.string.uuid(),
    mentorName: faker.person.fullName(),
    mentorPhoneNumber: faker.phone.number(),
    status: "ACTING",
    dateRequested: faker.date.anytime().toISOString(),
  },
  {
    id: faker.string.uuid(),
    mentorId: faker.string.uuid(),
    mentorName: faker.person.fullName(),
    mentorPhoneNumber: faker.phone.number(),
    status: "REQUESTED",
    dateRequested: faker.date.anytime().toISOString(),
  },
];
