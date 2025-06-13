type Person = {
  readonly id: number;
  readonly name: string;
  birth_year: number;
  death_year?: number;
  biography: string;
  image: string;
};

type Actress = {
  most_famous_movie: [string, string, string];
  awards: string;
  nationality:
    | "American"
    | "British"
    | "Australian"
    | "Israeli-American"
    | "South African"
    | "French"
    | "Indian"
    | "Israeli"
    | "Spanish"
    | "South Korean"
    | "Chinese";
};

const country: string[] = [
  "American",
  "British",
  "Australian",
  "Israeli-American",
  "South African",
  "French",
  "Indian",
  "Israeli",
  "Spanish",
  "South Korean",
  "Chinese",
];

function isActress(data: unknown): data is Actress {
  return (
    data !== null &&
    typeof data === "object" &&
    "id" in data &&
    typeof data.id === "number" &&
    "name" in data &&
    typeof data.name === "string" &&
    "biography" in data &&
    typeof data.biography === "string" &&
    "image" in data &&
    typeof data.image === "string" &&
    "birth_year" in data &&
    typeof data.birth_year === "number" &&
    "death_year" in data &&
    typeof data.birth_year === "number" &&
    "most_famous_movies" in data &&
    Array.isArray(data.most_famous_movies) &&
    data.most_famous_movies.length === 3 &&
    data.most_famous_movies.every((curElem) => typeof curElem === "string") &&
    "awards" in data &&
    typeof data.awards === "string" &&
    "nationality" in data &&
    typeof data.nationality === "string" &&
    country.includes(data.nationality)
  );
}

export type { Person, Actress };

export { isActress, country };
export default isActress;
