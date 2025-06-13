import { NormalizedFeedDetailData } from "./../../features/feed/feed.types";
import { faker } from "@faker-js/faker";

const mockedFeedDetailData: NormalizedFeedDetailData = {
  feedId: faker.string.uuid(),
  images: Array(2).fill(faker.image.url({ height: 125 })),
  title: faker.company.name(),
  userName: faker.person.fullName(),
  userNumbers: Array(2).fill(faker.phone.number({ style: "national" })),
  description: faker.lorem.paragraphs(20),
  publicationDate: faker.date.past().toString(),
  category: faker.commerce.department(),
  sketch: faker.datatype.boolean(),
  userId: faker.string.uuid(),
};

export default { mockedFeedDetailData };
