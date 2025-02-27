interface User {
    name: string;
    age: number;
  }
  
  const user: User = {
    name: "Yanis",
    age: 21
  };
  
  function OutName(user: User): void {
    console.log(`Hello, ${user.name}`);
  }
  
  OutName(user);