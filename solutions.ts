function formatValue(
  value: string | number | boolean
): string | number | boolean {
  if (typeof value === "string") return value.toUpperCase();
  if (typeof value === "number") return value * 10;
  if (typeof value === "boolean") return !value;
  return value;
}

function getLength(value: string | any[]): number {
  if (typeof value === "string") return value.length;
  if (Array.isArray(value)) return value.length;
  return 0;
}

class Person {
  constructor(public name: string, public age: number) {}

  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

type Item = {
  title: string;
  rating: number;
};

function filterByRating(items: Item[]): Item[] {
  return items.filter((item) => item.rating >= 4);
}

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(users: User[]): User[] {
  return users.filter((user) => user.isActive === true);
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): void {
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${
      book.publishedYear
    }, Available: ${book.isAvailable ? "Yes" : "No"}`
  );
}

function getUniqueValues<T extends Number | string>(
  array1: T[],
  array2: T[]
): T[] {
  const uniqueValues: T[] = [];

  for (let i = 0; i < array1.length; i++) {
    let exixts = false;

    for (let j = 0; j < uniqueValues.length; j++) {
      if (uniqueValues[j] === array1[i]) {
        exixts = true;
        break;
      }
    }

    if (!exixts) {
      uniqueValues[uniqueValues.length] = array1[i]!;
    }
  }

  for (let i = 0; i < array2.length; i++) {
    let exixts = false;
    for (let j = 0; j < uniqueValues.length; j++) {
      if (uniqueValues[j] === array2[i]) {
        exixts = true;
        break;
      }
    }

    if (!exixts) {
      uniqueValues[uniqueValues.length] = array2[i]!;
    }
  }

  return uniqueValues;
}

type Products = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

function calculateTotalPrice(products: Products[]): number {
  return products.reduce((total, product) => {
    const totalPrices = product.price * product.quantity;

    const finalPrice = product.discount
      ? totalPrices * (1 - product.discount / 100)
      : totalPrices;

    return total + finalPrice;
  }, 0);
}
