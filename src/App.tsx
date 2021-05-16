interface DataTypes<T> {
   data: T;
}

interface GenericIdentityFn<Type> {
   <Type>(arg: Type): Type;
}

// here we basically define the type of the function
let myIdentity: GenericIdentityFn<number> = defineType;
// we can now pass anything to it
function defineType<T>(arg: T): T {
   return arg;
}

// you can also explicity define de type
const string = defineType<string>("hello");
const number = defineType(3);

// working with arrays as parameters should be the same but instead of passing only the T type it should be T[]
function loggingIdentity<T>(arg: T[]): T[] {
   // since we define parameter as T[] it knows its an array so we have the array methods.
   console.log(arg.length);
   return arg;
}

const strValues: DataTypes<string> = {
   data: "name",
};

const arrayValues: DataTypes<string[]> = {
   data: ["name", "age"],
};

// think of this as a function and T is a parameter, so it can be anything but when actually calling the ResultTypes you have to pass the Type
interface ResultTypes<T> {
   name?: string;
   lastName?: string;
   age?: number;
   info?: T;
}

// Example here i want the type of info to be a string
const resultStr: ResultTypes<string> = {
   name: "anthony",
   lastName: "amaro",
   age: 26,
   info: "",
};

const resultNum: ResultTypes<number> = {
   name: "anthony",
   lastName: "amaro",
   age: 26,
   info: 0,
};

function defineObj<T>(): ResultTypes<string> {
   const result: ResultTypes<string> = {
      name: "anthony",
      lastName: "amaro",
      age: 26,
      info: "",
   };

   return result;
}

function App() {
   return (
      <div className="App">
         <h1>TypeScript Basics</h1>
      </div>
   );
}

export default App;
