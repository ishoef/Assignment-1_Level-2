# TypeScript-এর Interfaces এবং Types এর মধ্যে পার্থক্য এবং `keyof` কিওয়ার্ডের ব্যবহার

TypeScript হলো JavaScript-এর একটি শক্তিশালী superset যা **static typing** সাপোর্ট করে। TypeScript-এ আমরা কোডকে আরও **readable** এবং **maintainable** করার জন্য **interfaces** এবং **types** ব্যবহার করি। এছাড়াও, **`keyof`** কিওয়ার্ড ব্যবহার করে আমরা object-এর key গুলো টাইপ হিসেবে ধরতে পারি। চলুন বিস্তারিত দেখি।

---

## ১. Interfaces vs Types

TypeScript-এ `interface` এবং `type` দুইটি খুবই গুরুত্বপূর্ণ construct, কিন্তু এদের মধ্যে কিছু পার্থক্য আছে:

### Interfaces
- Interface হলো একটি **object structure বা shape** define করার জন্য ব্যবহার করা হয়।  
- আমরা সহজেই interface কে **extend** করতে পারি।  
- Classes ও **implement** করতে পারে interface।  

```ts
interface User {
    name: string;
    age: number;
}

interface Admin extends User {
    role: string;
}

const admin: Admin = {
    name: "Rahim",
    age: 30,
    role: "superadmin"
};
Types
Type হলো type alias, যেটি কোনো primitive, union, intersection, tuple বা object type-কে represent করতে পারে।

Type একবার define করলে পরে extend করা যায় না, তবে intersection ব্যবহার করে combine করা যায়।

ts
Copy code
type User = {
    name: string;
    age: number;
};

type Admin = User & {
    role: string;
};

const admin2: Admin = {
    name: "Karim",
    age: 28,
    role: "moderator"
};
মূল পার্থক্যগুলো
Feature	Interface	Type Alias
Extendable	হ্যাঁ, extends ব্যবহার করে	Intersection দিয়ে করা যায়
Declaration Merging	হ্যাঁ	না
Use with Primitives	না	হ্যাঁ

২. keyof কিওয়ার্ডের ব্যবহার
TypeScript-এ keyof কিওয়ার্ড ব্যবহার করে আমরা কোনো object type-এর সমস্ত key বের করে তা টাইপ হিসেবে ব্যবহার করতে পারি। এটি type-safe কোড লেখার ক্ষেত্রে খুবই সহায়ক।

ts
Copy code
type User = {
    name: string;
    age: number;
};

type UserKeys = keyof User; // "name" | "age"

const key1: UserKeys = "name"; // ✅ ঠিক আছে
const key2: UserKeys = "age";  // ✅ ঠিক আছে
// const key3: UserKeys = "role"; // ❌ ভুল, কারণ 'role' User-এর key নয়
ব্যবহারিক উদাহরণ
ts
Copy code
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const user = { name: "Rahim", age: 25 };
const userName = getProperty(user, "name"); // "Rahim"
এভাবে আমরা compile-time-এ নিশ্চিত হতে পারি যে শুধুমাত্র বৈধ key ব্যবহার করা হচ্ছে, যা runtime error কমায়।

✅ সংক্ষেপে
Interface মূলত object shape define করতে এবং extend করতে ব্যবহৃত হয়।

Type alias আরও general এবং union/intersection এর জন্য ব্যবহার করা যায়।

keyof দিয়ে object-এর key গুলো টাইপ হিসেবে নেওয়া যায় এবং type-safe property access সম্ভব হয়।

yaml
Copy code

💡 **ব্যবহার:**  
- কেবল এই block পুরোটা select করে কপি করো।  
- `README.md` ফাইলে paste করো।  
- GitHub preview-তে সব content একসাথে সুন্দরভাবে formatted দেখাবে।  

---
