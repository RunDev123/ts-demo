/*
 * 定义动物特征，要求他们都有eat和run的方法
 * */

import { AnimalAction } from "@/interface/index";
export abstract class Animal {
  public name: string;
  public color: string;

  constructor(name: string, color: string) {
    this.name = name;
    this.color = color;
  }
}
export class Cat<T extends { length: number }>
  extends Animal
  implements AnimalAction<T>
{
  constructor(name: string, color: string) {
    super(name, color);
  }
  eat(info: T): void {
    console.log(`${this.color}${this.name}在${info}`);
  }

  run(info: T): void {
    console.log(`${this.color}${this.name}在${info}`);
  }
}
export class Dog<T extends { length: number }>
  extends Animal
  implements AnimalAction<T>
{
  eat(info: T): void {
    console.log(`${this.color}${this.name}在${info}`);
  }

  run(info: T): void {
    console.log(`${this.color}${this.name}在${info}`);
  }
}
