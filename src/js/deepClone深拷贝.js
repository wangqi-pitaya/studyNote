function deepClone(obj) {
  // 如果是原始数据类型或者是null，则直接返回
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  // 根据obj的类型创建一个新的对象或者数组
  const clone = Array.isArray(obj) ? [] : {};

  // 遍历obj的所有属性进行递归的深拷贝
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // 递归地深拷贝子属性
      clone[key] = deepClone(obj[key]);
    }
  }

  return clone;
}

// 测试例子
const obj1 = {
  name: 'Alice',
  age: 20,
  hobbies: ['coding', 'reading'],
  address: {
    city: 'New York',
    country: 'USA'
  }
};

const obj2 = deepClone(obj1);

console.log(obj2);
// 输出：{ name: 'Alice', age: 20, hobbies: [ 'coding', 'reading' ], address: { city: 'New York', country: 'USA' } }

// 修改原始对象的属性值
obj1.name = 'Bob';
obj1.hobbies.push('painting');
obj1.address.city = 'San Francisco';

console.log(obj1);
// 输出：{ name: 'Bob', age: 20, hobbies: [ 'coding', 'reading', 'painting' ], address: { city: 'San Francisco', country: 'USA' } }

console.log(obj2);
// 输出：{ name: 'Alice', age: 20, hobbies: [ 'coding', 'reading' ], address: { city: 'New York', country: 'USA' } }